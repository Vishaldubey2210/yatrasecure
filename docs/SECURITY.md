# 🔒 Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Security Controls in YatraSecure
1. **Authentication**: httpOnly, Secure, SameSite=Strict cookies for refresh tokens with automatic token rotation.
2. **Access Tokens**: Short-lived (15 mins) asymmetric/symmetric JWTs.
3. **Data Sanitization**: Global input sanitization pipe blocking XSS and script injections.
4. **Rate Limiting**: NestJS Throttler protecting auth endpoints and SOS triggers.
5. **Database Protection**: Prisma ORM parameterized queries preventing SQL injection.
6. **Password Hashing**: Bcrypt with salt rounds = 12.

## Reporting a Vulnerability
To report a security vulnerability, please email `security@yatrasecure.com` or open a confidential Security Advisory on GitHub.
