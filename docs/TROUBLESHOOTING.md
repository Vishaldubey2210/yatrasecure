# 🛠️ Troubleshooting & FAQ

### 1. Prisma Client is out of sync with schema
**Fix**:
```bash
cd yatrasecure-api
npx prisma generate
```

### 2. CORS Error when connecting Frontend to Backend
**Fix**: Ensure `FRONTEND_URL` in `yatrasecure-api/.env` matches your Next.js dev server (`http://localhost:3000`).

### 3. WebSockets connection failing
**Fix**: Check if port `5000` is open and verify that the client connects to `NEXT_PUBLIC_SOCKET_URL`.

### 4. Leaflet map icons not loading
**Fix**: Ensure `leaflet-defaulticon-compatibility` is imported in `ItineraryMap.tsx`.
