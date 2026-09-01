# 🚀 Deployment Guide

## 1. Deploy with Docker Compose
```bash
# Clone the repository
git clone https://github.com/Vishaldubey2210/YatraSecure.git
cd YatraSecure

# Configure environment variables
cp yatrasecure-api/.env.example yatrasecure-api/.env
cp yatrasecure-web/.env.example yatrasecure-web/.env

# Build and launch containers
docker-compose up -d --build
```

## 2. Deploy Backend on Render / Railway
1. Create a PostgreSQL database on Railway or Supabase.
2. Link the repository and set the root directory to `yatrasecure-api`.
3. Set environment variables (`DATABASE_URL`, `JWT_SECRET`, `GROQ_API_KEY`).
4. Build command: `npm install && npx prisma generate && npm run build`.
5. Start command: `npm run start:prod`.

## 3. Deploy Frontend on Vercel
1. Import repository on Vercel.
2. Set root directory to `yatrasecure-web`.
3. Add environment variable `NEXT_PUBLIC_API_URL`.
4. Deploy!
