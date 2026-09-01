# 🗄️ Database Management & Migrations

YatraSecure uses a hybrid database strategy:
- **PostgreSQL**: Primary transactional database managed with Prisma ORM.
- **MongoDB**: Append-heavy real-time chat history and messages store.
- **Redis**: High-speed caching, session tokens, and rate limiter.

## Running Migrations
```bash
cd yatrasecure-api

# Create a new migration
npx prisma migrate dev --name your_migration_name

# Apply pending migrations to production
npx prisma migrate deploy

# Open Prisma Studio to inspect data
npx prisma studio
```

## Database Seeding
```bash
cd yatrasecure-api
npx ts-node src/prisma/seeders/comprehensive-seed.ts
```
