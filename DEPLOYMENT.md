# GitHub Pages Deployment Guide for HexaPrime

## Prerequisites
- GitHub account
- Git installed on your computer
- GitHub repository created for this project

## Setup Steps

### 1. Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository named `Hexa-Prime`
3. Don't initialize with README (we already have files)

### 3. Connect Local Repository to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/Hexa-Prime.git
git branch -M main
git push -u origin main
```
Replace `YOUR_USERNAME` with your actual GitHub username.

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
- Build your project (`vite build`)
- Create a `gh-pages` branch
- Push the `dist` folder to that branch

### 5. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: `gh-pages`
4. Click **Save**

### 6. Access Your Website
Your site will be available at:
```
https://izukanjisinks.github.io/Hexa-Prime/
```

## Updating Your Website

Whenever you make changes:
```bash
git add .
git commit -m "Your commit message"
git push origin main
npm run deploy
```

## Important Notes

- The `base: '/Hexa-Prime/'` in `vite.config.js` is required for GitHub Pages
- If you rename your repository, update the base path in `vite.config.js`
- Changes may take a few minutes to appear after deployment
- Make sure your repository is public for free GitHub Pages hosting

## Custom Domain (Optional)

To use a custom domain like `hexaprime.co.zm`:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Add the custom domain in GitHub Pages settings

## Troubleshooting

**404 Error on page refresh:**
- This is normal for SPAs on GitHub Pages
- Consider adding a 404.html that redirects to index.html

**Images not loading:**
- Make sure images are in the `public` folder
- Use absolute paths starting with `/Hexa-Prime/`

**Build fails:**
- Run `npm run build` locally first to check for errors
- Check the GitHub Actions tab for deployment logs
