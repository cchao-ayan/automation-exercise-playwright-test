# AutomationExercise Playwright Framework

This repository implements a feature-driven Playwright automation framework for `automationexercise.com`. The structure is organized around reusable feature modules, shared core services, and scalable test layers.

## Project Structure Overview

```
.
├── .github/
│   └── workflows/
│       └── playwright.yml                # GitHub Actions CI pipeline
├── config/
│   ├── .env                              # Environment variables loaded by Playwright
│   ├── paths.ts                          # Path helpers and route constants
│   ├── routes.ts                         # Application route definitions
│   └── urls.ts                           # Base URL and endpoint helpers
├── core/
│   ├── base/
│   │   └── base.page.ts                  # Base page class and shared navigation logic
│   ├── fixtures/
│   │   └── app.fixture.ts                # Playwright fixtures and page object injection
│   └── managers/
│       ├── api.manager.ts                # API helper management
│       ├── flow.manager.ts               # Test flow orchestration
│       ├── pom.manager.ts                # Page object manager factory
│       └── POManagerAutoPageInit.ts      # Automatic page initialization helper
├── features/
│   ├── auth/
│   │   ├── datas/
│   │   │   ├── invalid/
│   │   │   └── valid/
│   │   ├── pages/
│   │   ├── types/
│   │   └── utils/
│   ├── cart/
│   │   └── pages/
│   ├── checkout/
│   │   └── pages/
│   ├── contact-us/
│   │   ├── assets/
│   │   ├── datas/
│   │   ├── pages/
│   │   └── types/
│   ├── exercises/
│   │   └── pages/
│   ├── home/
│   │   └── pages/
│   └── products/
│       ├── api/
│       ├── component/
│       ├── datas/
│       ├── flow/
│       ├── pages/
│       ├── types/
│       └── utils/
├── logs/
│   └── test-log.txt                      # Execution logging history
├── shared/
│   ├── assertion/
│   ├── components/
│   ├── flow/
│   ├── logger/
│   ├── types/
│   └── utils/
├── tests/
│   ├── api/
│   ├── e2e/
│   ├── test-data-creation/
│   └── ui/
├── playwright-report/                     # HTML summary results
├── test-results/                          # Raw browser test outputs
├── test-screenshots/                      # Failure screenshots
├── playwright.config.ts                   # Playwright configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Feature-Driven Framework Design

This repository follows a feature-driven structure so tests and automation code are grouped by product behavior rather than by technical layer.

### Features Module

- `src/features/` contains feature domains such as `auth`, `cart`, `checkout`, `contact-us`, `exercises`, `home`, and `products`
- Each feature can contain:
  - `pages/` for page object implementations
  - `types/` for domain models and request data shapes
  - `datas/` for test data fixtures
  - `utils/` for feature-specific helpers
  - `api/` or `component/` when needed for specialized logic

### Core Services

- `src/core/base/` contains shared page base classes and common UI behavior
- `src/core/fixtures/` defines Playwright fixtures and dependency injection
- `src/core/managers/` holds reusable managers for API, flow orchestration, and page object creation

### Shared Utilities

- `src/shared/components/` houses reusable UI component models such as header/footer
- `src/shared/assertion/` holds generic matchers and assertion helpers
- `src/shared/logger/` centralizes logging helpers
- `src/shared/utils/` contains common helpers used across features
- `src/shared/types/` defines reusable validation and domain types

### Configuration

- `config/.env` stores environment-specific values loaded by Playwright
- `config/paths.ts`, `config/routes.ts`, and `config/urls.ts` centralize URL and route configuration

## Tests Structure

- `tests/ui/` contains UI-focused specs such as `login.spec.ts`, `signup.spec.ts`, and `footer.spec.ts`
- `tests/e2e/` contains end-to-end flows such as `scenarios.spec.ts`
- `tests/api/` contains API-level tests such as `test.spec.ts`
- `tests/test-data-creation/` contains data creation or seed-related test scenarios

## Running Tests

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

### Run all tests

```bash
npm run pw:run
```

### Run tests in headed mode

```bash
npm run pw:headed
```

### Run specific suites

```bash
npm run pw:api
npm run pw:login
npm run pw:signup
npm run pw:footer
npm run pw:scenario
```

### Open the test report

```bash
npm run pw:report
```

### Additional utilities

```bash
npm run lint
npm run format
```

## Playwright Configuration

- `playwright.config.ts` sets the `testDir`, browser projects, reporting, retries, and shared `use` options
- Uses `baseURL` configured for `https://automationexercise.com/`
- Screenshots and videos are retained only on failure
- HTML report output is stored in `playwright-report/`

## CI/CD Integration

- The GitHub Actions pipeline is defined in `.github/workflows/playwright.yml`
- It installs dependencies, runs Playwright tests, and publishes results on pushes and pull requests

## Test Reporting and Artifacts

- Failure screenshots are available in `test-screenshots/`
- HTML reports are generated in `playwright-report/`
- Raw browser outputs are saved to `test-results/`

## Notes

- If `config/.env` is not present, create it with the required environment values before running tests
- The feature-driven design helps keep behaviour-specific automation separate from shared infrastructure code
