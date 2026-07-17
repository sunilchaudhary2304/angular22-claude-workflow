# Angular 22 Claude Workflow

This repository is a starter Angular 22 application with a feature-first structure, standalone components, Bootstrap styling, and a sample users experience.

## Features

- Angular 22 + standalone components
- Bootstrap 5 styling via SCSS
- Feature-based folder structure
- Example users feature with list, search, and role filtering
- Working build configuration for development and production

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the development server
   ```bash
   npm start
   ```

3. Build for production
   ```bash
   npm run build
   ```

## Project structure

- src/app/app.component.ts - app shell
- src/app/app.routes.ts - root routing
- src/app/features/users - example users feature
- src/app/shared - shared UI components

## Push to GitHub

If you want to publish this repository to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Notes

- Node.js 24.15+ is recommended for Angular 22.
- The project has already been verified with a successful production build.
