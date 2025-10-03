# Interwhip

Interwhip app built with [Angular](https://angular.io/) as frontend framework, [Angular Material](https://material.angular.io/) and [Bootstrap](https://getbootstrap.com/) for design and styling. [NgRx](https://ngrx.io/) is used for state management.  
It provides basic app scaffolding to build test assessments.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1 and updated to v20.3.2.

## Environment / Node Version

This project expects **Node.js 22 or newer**.

If you run into unexpected install, lint, or Jest issues, first verify your Node version:

```bash
node -v
```

If it's lower than 22, update (recommended via [nvm](https://github.com/nvm-sh/nvm)):

```bash
nvm install 22
nvm use 22
```

Then reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Development Server

Start the dev server:

```bash
ng serve
```

Then open http://localhost:4200/ (auto reload enabled).

## Code Scaffolding

Generate a component:

```bash
ng generate component component-name
```

Other blueprints:

```bash
ng generate directive|pipe|service|class|guard|interface|enum|module name
```

## Build

Create a production build:

```bash
ng build
```

Output goes to `dist/`.

## Linting

Run ESLint via Angular CLI:

```bash
ng lint
```

Run ESLint directly (flat config):

```bash
npx eslint .
```

## Git Hooks (Husky)

This project uses [Husky](https://typicode.github.io/husky) to prevent commits when tests are failing.

Pre-commit hook runs:

```bash
npm run test:ci
```

Reinstall hooks (after fresh clone):

```bash
npm run prepare
```

Skip hook (not recommended):

```bash
git commit -m "msg" --no-verify
```

## Running Unit Tests

Watch mode (developer workflow):

```bash
npm run test:watch
```

Single run:

```bash
npm test
```

CI mode (no watch + coverage):

```bash
npm run test:ci
```

Generate coverage report only:

```bash
npm run test:coverage
```

Update snapshots (after intentional UI changes):

```bash
npm run test:update-snapshots
```

## End-to-End Tests

No e2e test framework is configured yet. To add one (e.g. Cypress):

```bash
ng add @cypress/schematic
```

Then run:

```bash
ng e2e
```

## Command Reference

| Task                | Command                           |
| ------------------- | --------------------------------- |
| Start dev server    | `ng serve`                        |
| Build               | `ng build`                        |
| Lint (Angular)      | `ng lint`                         |
| Lint (direct)       | `npx eslint .`                    |
| Unit tests (single) | `npm test`                        |
| Unit tests (watch)  | `npm run test:watch`              |
| Unit tests (CI)     | `npm run test:ci`                 |
| Coverage report     | `npm run test:coverage`           |
| Update snapshots    | `npm run test:update-snapshots`   |
| Install git hooks   | `npm run prepare`                 |
| Bypass hook (avoid) | `git commit -m "msg" --no-verify` |

## Further Help

Angular CLI docs: https://angular.io/cli

Run:

```bash
ng help
```
