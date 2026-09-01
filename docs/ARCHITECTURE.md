# 🏛️ YatraSecure System Architecture

YatraSecure is an intelligent, safety-first collaborative travel platform engineered to provide seamless group trip management, real-time safety monitoring, automated splitwise expense settlements, AI-driven destination itineraries, and social travel networking.

```mermaid
graph TD
    Client[Next.js 16 Web & Mobile PWA] -->|HTTPS REST / Cookie Auth| APIGateway[NestJS Core API Gateway]
    Client -->|WSS Socket.IO| SocketGateway[WebSockets Chat & SOS Gateway]
    
    APIGateway --> AuthMod[Auth & Security Module]
    APIGateway --> TripMod[Trips & Itinerary Module]
    APIGateway --> ExpenseMod[Splitwise & Wallet Module]
    APIGateway --> SafetyMod[Safety & SOS Beacon Module]
    APIGateway --> AIMod[Groq AI Agent Orchestrator]

    TripMod --> Prisma[Prisma ORM]
    ExpenseMod --> Prisma
    SafetyMod --> Prisma
    AuthMod --> Prisma
    
    Prisma --> Postgres[(PostgreSQL DB)]
    SocketGateway --> Mongo[(MongoDB Message Store)]
    APIGateway --> Redis[(Redis Cache & Rate Limiter)]
```

## Architectural Highlights
- **Backend**: NestJS v11 (TypeScript) structured into decoupled domain modules with Prisma ORM and Express platform.
- **Frontend**: Next.js 16 (App Router), React 19, TailwindCSS, Framer Motion, Leaflet maps, Recharts analytics.
- **Real-time Engine**: Socket.IO WebSockets for live group chat, typing indicators, and emergency SOS broadcasting.
- **AI Engine**: Groq LLaMA 3.3 integration for personalized destination guides, packing list generation, and personality matchmaking.
