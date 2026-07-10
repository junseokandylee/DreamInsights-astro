#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
PROJECT_NAME="dream-db"
DEPLOY_DIR=$(mktemp -d)
trap "rm -rf $DEPLOY_DIR" EXIT

echo "🏗️  Building..."
npx astro build

echo "📦 Preparing deployment..."
mkdir -p "$DEPLOY_DIR"
cp -r dist/client/* "$DEPLOY_DIR/"
cp dist/server/entry.mjs "$DEPLOY_DIR/_worker.js"
cp -r dist/server/chunks "$DEPLOY_DIR/"
cp dist/server/virtual_astro_middleware.mjs "$DEPLOY_DIR/" 2>/dev/null || true

echo "🚀 Deploying to CF Pages..."
npx wrangler pages deploy "$DEPLOY_DIR" --project-name="$PROJECT_NAME" --commit-dirty=true
