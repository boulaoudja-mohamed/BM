# Deploy Your Portfolio to GitHub - Step by Step

## ✅ Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the details:**
   - **Repository name**: `portfolio` (or any name you prefer)
   - **Description**: `My personal portfolio website`
   - **Make it PUBLIC** (important for GitHub Pages)
   - **DO NOT** check "Add a README file"
   - **DO NOT** check "Add .gitignore"
   - **DO NOT** check "Choose a license"
5. **Click "Create repository"**

## ✅ Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Replace YOUR_USERNAME with your actual GitHub username
# Replace YOUR_REPO_NAME with the repository name you created

& "C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
& "C:\Program Files\Git\bin\git.exe" branch -M main
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

## ✅ Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** section (in the left sidebar)
4. **Under "Source"**, select **"Deploy from a branch"**
5. **Select "main"** branch
6. **Select "/ (root)"** folder
7. **Click "Save"**

## ✅ Step 4: Your Portfolio is Live!

Your portfolio will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 🚀 Alternative: Deploy with Vercel (Recommended)

For better performance and automatic deployments:

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up with your GitHub account**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Click "Deploy"**

Your site will be available at: `https://your-project-name.vercel.app`

## 🚀 Alternative: Deploy with Netlify

1. **Go to [Netlify.com](https://netlify.com)**
2. **Sign up with your GitHub account**
3. **Click "New site from Git"**
4. **Choose your repository**
5. **Build settings:**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. **Click "Deploy site"**

Your site will be available at: `https://your-project-name.netlify.app`

## 📝 Example Commands

If your GitHub username is `mohamed-boulaoudja` and you named your repo `portfolio`:

```bash
& "C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/mohamed-boulaoudja/portfolio.git
& "C:\Program Files\Git\bin\git.exe" branch -M main
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

Your site would be at: `https://mohamed-boulaoudja.github.io/portfolio/` 