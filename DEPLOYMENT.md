# Deployment Guide - Temple of Productivi-Tea

## Quick Deploy Options

### Option 1: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `https://github.com/Tasfia-17/productivity`
4. Vercel will auto-detect the `vercel.json` configuration
5. Click "Deploy"

That's it! Vercel will automatically build and deploy your app.

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Netlify will auto-detect the `netlify.toml` configuration
5. Click "Deploy"

### Option 3: Manual Build

Run the build script:

```bash
./build.sh
```

Or manually:

```bash
cd build-template/src/frontend
npm install
npm run build:skip-bindings
```

The production build will be in `build-template/src/frontend/dist/`

Deploy this folder to any static hosting:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## Environment Variables

The app doesn't require any environment variables for basic deployment. The ICP backend integration is optional.

## Build Configuration

- **Build Command**: `cd build-template/src/frontend && npm install && npm run build:skip-bindings`
- **Output Directory**: `build-template/src/frontend/dist`
- **Node Version**: 18.x or higher recommended

## Troubleshooting

### Build fails with "command not found"

Make sure Node.js 18+ is installed:
```bash
node --version
```

### Missing dependencies

Run:
```bash
cd build-template/src/frontend
npm install
```

### Port conflicts in development

The dev server runs on port 3000 by default. Change it in package.json if needed.

## Repository

https://github.com/Tasfia-17/productivity
