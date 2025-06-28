# Deploy Portfolio to GitHub Script
Write-Host "🚀 Starting Portfolio Deployment..." -ForegroundColor Green

# Check if Git is available
try {
    $gitVersion = & "C:\Program Files\Git\bin\git.exe" --version
    Write-Host "✅ Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git not found. Please install Git first." -ForegroundColor Red
    exit 1
}

# Set Git alias for easier use
Set-Alias -Name git -Value "C:\Program Files\Git\bin\git.exe"

# Initialize Git repository
Write-Host "📁 Initializing Git repository..." -ForegroundColor Yellow
git init

# Add all files
Write-Host "📦 Adding files to Git..." -ForegroundColor Yellow
git add .

# Initial commit
Write-Host "💾 Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Portfolio website"

Write-Host "✅ Local Git repository ready!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub.com" -ForegroundColor White
Write-Host "2. Make it PUBLIC" -ForegroundColor White
Write-Host "3. Run the following commands:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "🌐 For automatic deployment, consider using Vercel or Netlify!" -ForegroundColor Cyan 