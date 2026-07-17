# Enterprise Angular App — Claude Code Context

## Stack
- Angular 22 with standalone components and zoneless-ready architecture
- Bootstrap 5.3 via SCSS
- TypeScript strict mode enforced
- Feature-first structure with shared UI under src/app/shared

## Project Layout
- See src/app/ for feature modules
- Each feature should have components/, state/, services/, and *.routes.ts
- Shared components go in src/app/shared/
- Core services and app-wide providers belong in src/app/core/

## Commands
- Build: npm run build
- Dev server: npm start
- Type check: npx tsc --noEmit

## Angular Rules
- Always use standalone components
- Prefer inject() over constructor injection
- Keep components focused and use feature folders for domain logic
- Prefer Bootstrap utilities and SCSS tokens over custom CSS when possible
