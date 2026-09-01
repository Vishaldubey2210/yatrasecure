# 🌍 YatraSecure - Smart, Safe & Collaborative Travel Platform

[![CI Pipeline](https://github.com/Vishaldubey2210/YatraSecure/actions/workflows/ci.yml/badge.svg)](https://github.com/Vishaldubey2210/YatraSecure/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-11-red?logo=nestjs)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5-blue?logo=prisma)](https://prisma.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)

**YatraSecure** is an enterprise-grade, safety-first collaborative travel platform designed for modern solo travelers, backpackers, and travel groups. It combines real-time safety distress beacons, AI itinerary generation, Splitwise-style debt simplification, interactive Leaflet live maps, and community matchmaking into a unified full-stack application.

---

## 🌟 Key Features

- 🛡️ **Emergency SOS & Safety Beacon**: Instant distress broadcasting with real-time GPS coordinates, siren alert, and emergency helpline directory.
- 💸 **Smart Splitwise Expense Optimizer**: Graph-reduction debt simplification algorithm minimizing group transactions to $N-1$ transfers.
- 🤖 **AI Travel Guide & Itinerary Generator**: LLaMA 3.3 powered custom day-by-day itineraries, climate advisory, and hidden gem recommendations.
- 🗺️ **Interactive Live Trip Maps**: Real-time traveler positioning and route planning with Leaflet.
- 🎒 **Travel Toolkit**: Dynamic packing list generator, multi-currency converter, carbon footprint calculator, and multilingual travel phrasebook.
- 📱 **Progressive Web App (PWA)**: Complete offline caching, offline emergency handbook, and responsive mobile-first UI.

---

## 🏗️ Tech Stack

### Frontend (`yatrasecure-web`)
- **Framework**: Next.js 16 (App Router) & React 19
- **Styling**: TailwindCSS 4, Framer Motion
- **Maps & Charts**: Leaflet, React-Leaflet, Recharts
- **Icons & UI**: Lucide Icons, React Hot Toast

### Backend (`yatrasecure-api`)
- **Framework**: NestJS 11 (Node.js & Express)
- **Database & ORM**: PostgreSQL with Prisma ORM, MongoDB for chat logs
- **Real-Time**: Socket.IO WebSockets Gateway
- **Auth**: JWT with HttpOnly Secure Cookies & Refresh Token Rotation
- **AI**: Groq SDK (LLaMA 3.3 70B)

---

## 🚀 Quick Start

### Prerequisites
- Node.js >= 20.x
- Docker & Docker Compose
- PostgreSQL 16+ & MongoDB

### 1. Launch with Docker Compose
```bash
git clone https://github.com/Vishaldubey2210/YatraSecure.git
cd YatraSecure
docker-compose up -d --build
```
Access Frontend at `http://localhost:3000` and API at `http://localhost:5000`.

### 2. Manual Development Setup
```bash
# Backend Setup
cd yatrasecure-api
npm install
npx prisma generate
npm run start:dev

# Frontend Setup (in a separate terminal)
cd ../yatrasecure-web
npm install
npm run dev
```

---

## 📖 Documentation
- [System Architecture](docs/ARCHITECTURE.md)
- [REST API Specification](docs/API_DOCUMENTATION.md)
- [WebSocket Protocol](docs/WEBSOCKETS.md)
- [Safety Index Algorithm](docs/SAFETY_ALGORITHM.md)
- [Expense Debt Simplification](docs/EXPENSE_ALGORITHM.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
