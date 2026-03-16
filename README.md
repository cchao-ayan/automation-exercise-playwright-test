## Project Structure Overview

```
src/
├── .github/
│   └── workflows/
│       └── playwright.yml            # GitHub Actions CI pipeline
│
├── config/
│   ├── .env                          # Environment variables (credentials, URLs)
│   └── TestCredentials.ts            # Centralized credential handling
│
├── fixture/
│   ├── pom.fixture.ts                # Page Object Model fixtures
│   └── ui.fixture.ts                 # UI fixtures and setup
│
├── pages/
│   ├── account-created/              # Account creation confirmation page
│   ├── account-deleted/              # Account deletion confirmation page
│   │
│   ├── base/
│   │   ├── BasePage.ts               # Base navigation & lifecycle logic
│   │   └── CommonPageMethods.ts      # Shared reusable page methods
│   │
│   ├── common/
│   │   ├── header/                   # Header component objects
│   │   └── footer/                   # Footer component objects
│   │
│   ├── home/
│   │   ├── HomePage.ts
│   │   └── HomePageLocators.ts
│   │
│   ├── login/
│   │   ├── LoginPage.ts
│   │   └── LoginPageLocators.ts
│   │
│   ├── signup/
│   │   ├── SignUpPage.ts
│   │   └── SignUpPageLocators.ts
│   │
│   ├── manager/
│   │   ├── POManager.ts              # Page Object factory / manager
│   │   └── POManager2.ts             # Alternative PO manager implementation
│
├── tests/                            # Test specifications
│
├── utilities/
│   ├── broken-links-checker.ts       # Broken link validation utility
│   ├── step-decorator.ts             # Step logging
│   └── step-decorator2.ts
│
├── playwright-report/                # HTML execution report
├── test-results/                     # Raw Playwright results
├── test-screenshots/                 # Failure screenshots
│
├── playwright.config.ts              # Playwright global configuration
├── package.json
├── package-lock.json
└── README.md
```

## Framework Design & Key Concepts

✅ Page Object Model (POM)

Each page has:

- Page class (actions & behaviors)
- Locator class (selectors only)
- Separating locators improves:
- Maintainability
- Readability
- Easier UI updates

Example:
`await loginPage.login(username, password);`

✅ Base Page Architecture
Located in pages/base/

- BasePage.ts
- Centralized navigation logic
- URL handling
- CommonPageMethods.ts
- Shared methods like page readiness, common waits, reusable actions
- This ensures consistent behavior across all pages.

✅ Common Components
Located in pages/common/

- Header and Footer components
- Reusable UI elements shared across multiple pages
- Prevents duplicated locators and logic

✅ Page Object Manager Pattern
Located in pages/manager/

- Central factory for initializing page objects
- Keeps test files clean
- Supports scalable test growth

✅ Custom Fixtures
Located in fixture/

- pom.fixture.ts - Injects page objects into tests
- ui.fixture.ts - Shared UI setup logic

Example usage:

`test('User can sign up', async ({ signupPage }) => {
  await signupPage.registerUser();
});`

✅ Environment Configuration
Located in config/

- .env - Stores credentials and environment values
- TestCredentials.ts - Central access layer for environment variables, Avoids hardcoding sensitive data.

✅ Utilities
Located in utilities/

- broken-links-checker.ts - Validates broken links on a page
- step-decorator.ts - Adds readable step logging to tests, Improves reporting and debugging

## How to Run the Tests

🔹 Prerequisites

Node.js (v16+)

npm

🔹 Install Dependencies
`npm install`

🔹 Install Playwright Browsers
`npx playwright install`

🔹 Run All Tests
`npx playwright test`

🔹 Run Tests in Headed Mode
`npx playwright test --headed`

🔹 View HTML Report
`npx playwright show-report`

## CI/CD Integration

The project includes a GitHub Actions workflow:
.github/workflows/playwright.yml

- This pipeline:
- Installs dependencies
- Runs Playwright tests
- Generates test results automatically on push or pull request

## Test Evidence & Reporting

- Screenshots captured on failure → test-screenshots/
- HTML reports → playwright-report/
- Execution artifacts → test-results/
