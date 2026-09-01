Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "🚀 YATRASECURE FULL BUILD & TEST CHECK" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# 1. API Verification
Write-Host "`n[1/2] Verifying Backend (yatrasecure-api)..." -ForegroundColor Yellow
Set-Location "$PSScriptRoot/../yatrasecure-api"
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Backend build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Backend built successfully." -ForegroundColor Green

# 2. Web Verification
Write-Host "`n[2/2] Verifying Frontend (yatrasecure-web)..." -ForegroundColor Yellow
Set-Location "$PSScriptRoot/../yatrasecure-web"
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Frontend build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Frontend built successfully." -ForegroundColor Green

Write-Host "`n🎉 All builds verified successfully!" -ForegroundColor Green
