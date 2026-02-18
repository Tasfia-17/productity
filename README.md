# Temple of Productivi-Tea

A satirical procrastination-themed productivity web application built with React, Vite, and TypeScript.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the configuration from `vercel.json`
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
cd build-template/src/frontend
pnpm install
pnpm run build:skip-bindings
```

Then drag and drop the `build-template/src/frontend/dist` folder to Netlify.

### Deploy to Other Platforms

Build the app:

```bash
cd build-template/src/frontend
pnpm install
pnpm run build:skip-bindings
```

The production build will be in `build-template/src/frontend/dist/`. Deploy this folder to any static hosting service.

## Local Development

```bash
cd build-template/src/frontend
pnpm install
pnpm start
```

The app will be available at http://localhost:3000

## Features

- Satirical productivity app with procrastination theme
- 50+ interactive components and sections
- Custom animations and microfeatures
- Achievement system
- Responsive design with Tailwind CSS
- shadcn/ui component library

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Internet Computer (ICP) backend support
