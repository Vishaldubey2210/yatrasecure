#!/bin/bash
set -e

echo "=========================================="
echo "🚀 YATRASECURE FULL BUILD & TEST CHECK"
echo "=========================================="

echo -e "
[1/2] Checking Backend API..."
cd "$(dirname "$0")/../yatrasecure-api"
npm run build
echo "✅ Backend API built successfully."

echo -e "
[2/2] Checking Frontend Web..."
cd "$(dirname "$0")/../yatrasecure-web"
npm run build
echo "✅ Frontend Web built successfully."

echo -e "
🎉 All builds verified successfully!"
