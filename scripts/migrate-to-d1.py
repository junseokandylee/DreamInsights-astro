import subprocess, json, urllib.request, os, sys

PG_PASS = os.environ.get("PG_PASSWORD", "")
CF_ACCOUNT = os.environ.get("CLOUDFLARE_ACCOUNT_ID", "")
CF_TOKEN = os.environ.get("CLOUDFLARE_API_TOKEN", "")
D1_UUID = "7978c74b-65e0-4ca1-b18d-a857aea86132"

if not all([PG_PASS, CF_ACCOUNT, CF_TOKEN]):
    print("ERROR: Missing env vars PG_PASSWORD, CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN")
    sys.exit(1)

def d1_exec(sql):
    data = json.dumps({"sql": sql}).encode()
    req = urllib.request.Request(
        f"https://api.cloudflare.com/client/v4/accounts/{CF_ACCOUNT}/d1/database/{D1_UUID}/query",
        data=data, headers={"Authorization": f"Bearer {CF_TOKEN}", "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        result = json.loads(resp.read())
    if not result['success']:
        raise Exception(f"D1 error: {result['errors']}")
    return result['result']

def pg(sql):
    env = os.environ.copy()
    env["PGPASSWORD"] = PG_PASS
    r = subprocess.run(
        ["psql", "-h", "192.168.30.10", "-U", "postgres", "-d", "postgres", "-t", "-A", "-F", "\t", "-c", sql],
        capture_output=True, text=True, env=env)
    return r.stdout.strip()

def esc(s):
    return str(s).replace("'", "''").replace("\n", " ").replace("\r", "")

def migrate(table, select_sql, fmt_row, batch=200):
    print(f"=== {table} ===")
    total = int(pg(f"SELECT count(*) FROM {table}"))
    print(f"  Total: {total}")
    offset = 0; bn = 0; errs = 0; inserted = 0
    while offset < total:
        bn += 1
        rows = pg(f"{select_sql} LIMIT {batch} OFFSET {offset}")
        if not rows: break
        vals = []
        for line in rows.split("\n"):
            if not line.strip(): continue
            vals.append(fmt_row(line.split("\t")))
        if not vals:
            offset += batch
            continue
        sql = f"INSERT OR IGNORE INTO {table} VALUES {','.join(vals)}"
        try:
            d1_exec(sql)
            inserted += len(vals)
        except Exception as e:
            errs += 1
            if errs <= 3:
                print(f"  ERR offset {offset}: {e}")
        offset += batch
        if bn % 50 == 0 or offset >= total:
            print(f"  ... {min(offset,total)}/{total} inserted:{inserted} err:{errs}")
    print(f"  Done: inserted={inserted}/{total}")

migrate("categories",
    "SELECT id, slug, name_ko, COALESCE(name_en,''), sort_order FROM categories ORDER BY id",
    lambda p: f"({p[0]},'{esc(p[1])}','{esc(p[2])}','{esc(p[3])}',{p[4]})",
    batch=1000)

migrate("dream_interpretations",
    "SELECT id, slug, COALESCE(category_id,0), views FROM dream_interpretations ORDER BY id",
    lambda p: f"({p[0]},'{esc(p[1])}',{p[2]},{p[3]})",
    batch=500)

migrate("interpretation_content",
    "SELECT interpretation_id, language_code, title, content, COALESCE(keywords,'') FROM interpretation_content ORDER BY interpretation_id, language_code",
    lambda p: f"({p[0]},'{esc(p[1])}','{esc(p[2])}','{esc(p[3])}','{esc(p[4])}')",
    batch=200)

print("\n=== VERIFICATION ===")
for t in ['categories','dream_interpretations','interpretation_content']:
    res = d1_exec(f"SELECT count(*) as c FROM {t}")
    print(f"  {t}: {res[0]['results'][0]['c']}")
