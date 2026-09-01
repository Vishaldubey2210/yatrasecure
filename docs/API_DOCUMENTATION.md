# 📡 YatraSecure REST API Specification

Base URL: `http://localhost:5000` (or `https://api.yatrasecure.com`)

## 1. Authentication Endpoints
- `POST /auth/signup`: Register a new user account.
- `POST /auth/login`: Authenticate with email/password and obtain JWT.
- `POST /auth/refresh`: Refresh access token via httpOnly cookie.
- `POST /auth/logout`: Revoke active refresh token.
- `POST /auth/verify-email`: Verify email address token.
- `POST /auth/forgot-password`: Request password reset email.
- `POST /auth/reset-password`: Set new password with reset token.

## 2. Trips Endpoints
- `GET /trips`: Query and search available trips with filters.
- `POST /trips`: Create a new group or solo trip.
- `GET /trips/:id`: Retrieve trip details, itinerary, and members.
- `PUT /trips/:id`: Update trip details (Admin only).
- `DELETE /trips/:id`: Cancel/delete trip.
- `POST /trips/:id/join`: Request to join a public or private trip.

## 3. Expenses & Wallet Endpoints
- `GET /expenses/:tripId`: Retrieve all trip expenses and summary.
- `POST /expenses`: Record a new group expense with participants.
- `GET /expenses/:tripId/settlements`: Compute optimal debt simplification settlements.
- `POST /expenses/settle`: Confirm settlement transaction.

## 4. Safety & SOS Endpoints
- `POST /safety/sos`: Broadcast immediate emergency SOS distress signal.
- `GET /safety/score/:tripId`: Calculate real-time safety index.
- `GET /safety/helplines`: Retrieve emergency contacts directory.
