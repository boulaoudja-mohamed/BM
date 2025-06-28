# Deploy Your Portfolio to GitHub

## Step 1: Install Git (if not already done)
```bash
winget install --id Git.Git -e --source winget
```

## Step 2: Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

## Step 4: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `your-portfolio` (or any name you prefer)
5. Make it **Public**
6. **Don't** initialize with README, .gitignore, or license
7. Click "Create repository"

## Step 5: Connect and Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 6: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

## Step 7: Configure for SPA (Single Page Application)
Since this is a React app, you need to handle routing properly. Create a `public/_redirects` file:

```
/*    /index.html   200
```

## Step 8: Build and Deploy
```bash
npm run build
git add .
git commit -m "Build for deployment"
git push
```

## Step 9: Your Site URL
Your portfolio will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Alternative: Use Vercel (Recommended)
For better performance and easier deployment:

1. Go to [Vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Deploy automatically

Your site will be available at: `https://your-project-name.vercel.app`

## Alternative: Use Netlify
1. Go to [Netlify.com](https://netlify.com)
2. Sign up with your GitHub account
3. Click "New site from Git"
4. Choose your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy

Your site will be available at: `https://your-project-name.netlify.app` 