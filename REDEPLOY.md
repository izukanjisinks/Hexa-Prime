# Quick Redeploy Instructions

## Fixed: Logo Images Not Showing

The logo paths have been updated to include the GitHub Pages base path `/Hexa-Prime/`.

## Redeploy Now

Run these commands to update your live site:

```bash
# Save your changes
git add .
git commit -m "Fix logo paths for GitHub Pages"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

Wait 1-2 minutes, then refresh your site at:
https://izukanjisinks.github.io/Hexa-Prime/

The logos should now appear correctly!
