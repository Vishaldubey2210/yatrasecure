#!/bin/bash
set -e

BACKUP_DIR="./backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
mkdir -p "$BACKUP_DIR"

echo "📦 Creating PostgreSQL database backup..."
pg_dump -U ${POSTGRES_USER:-postgres} -h ${POSTGRES_HOST:-localhost} ${POSTGRES_DB:-yatrasecure} > "$BACKUP_DIR/yatrasecure_backup_$TIMESTAMP.sql"

echo "✅ Backup successfully saved to $BACKUP_DIR/yatrasecure_backup_$TIMESTAMP.sql"
