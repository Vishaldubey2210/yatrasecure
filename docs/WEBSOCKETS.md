# ⚡ WebSocket Real-Time Gateway

YatraSecure uses Socket.IO for bidirectional, event-driven communication.

## Connection
- **Endpoint**: `ws://localhost:5000/socket.io/`
- **Auth**: JWT Token passed via `auth.token` or cookie.

## Emitted Events (Client -> Server)
| Event | Payload | Description |
|---|---|---|
| `join_trip_room` | `{ tripId: string }` | Join the real-time room for a trip |
| `leave_trip_room` | `{ tripId: string }` | Leave trip room |
| `send_message` | `{ tripId: string, text: string }` | Send group message |
| `typing` | `{ tripId: string, isTyping: boolean }` | Broadcast typing status |
| `trigger_sos` | `{ tripId: string, lat: number, lng: number }` | Trigger emergency SOS |

## Received Events (Server -> Client)
| Event | Payload | Description |
|---|---|---|
| `new_message` | `MessageObject` | New message in active room |
| `user_typing` | `{ userId: string, username: string }` | User typing alert |
| `sos_alert` | `SOSAlertObject` | Emergency SOS broadcast |
