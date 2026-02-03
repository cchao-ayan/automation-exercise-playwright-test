# Contributing to AutomationExercise Playwright Tests

This guide explains the configuration files, tools, and best practices used in this project.

## Configuration Files Overview

### TypeScript Configuration (`tsconfig.json`)

- **Purpose**: Configures TypeScript compiler for strict type checking and modern JavaScript output
- **Key settings**:
  - `target: ES2020` - Modern JavaScript syntax for all browsers
  - `strict: true` - Enforces strict type checking (prevents many runtime errors)
  - `module: CommonJS` - Compatible with Node.js and Playwright
  - `types: ["node", "@playwright/test"]` - Includes Playwright test framework types

**When to update**: Only when you need to adjust TypeScript compilation behavior or add new type libraries.

---

### ESLint Configuration (`.eslintrc.json`)

- **Purpose**: Enforces code quality standards and prevents common JavaScript/TypeScript mistakes
- **Key features**:
  - Parses TypeScript syntax using `@typescript-eslint/parser`
  - Enforces strict type safety rules
  - Integrates with Prettier to avoid formatting conflicts

**Key rules**:

- `@typescript-eslint/explicit-function-return-type: warn` - Encourages explicit return types for clarity
- `@typescript-eslint/explicit-module-boundary-types: off` - Relaxed for internal helper functions

**Run ESLint**:

```bash
npm run lint              # Check for issues
npm run lint -- --fix    # Auto-fix fixable issues
```

---

### Prettier Configuration (`.prettierrc`)

- **Purpose**: Automatic code formatting for consistent style across the project
- **Settings**:
  - `printWidth: 100` - Wrap lines longer than 100 characters
  - `singleQuote: true` - Use single quotes (TypeScript convention)
  - `trailingComma: all` - Add trailing commas in multi-line structures
  - `semi: true` - Require semicolons

**Why Prettier?** Eliminates code style debates by enforcing one universal format.

**Run Prettier**:

```bash
npm run format    # Auto-format all files
```

---

### Playwright Configuration (`playwright.config.ts`)

- **Purpose**: Global test settings, browser configurations, and reporter options

**Key additions** (recent improvements):

- `timeout: 120_000` - Each test has 120 seconds max (override per-test with `test.setTimeout()`)
- `expect.timeout: 5_000` - Assertions have 5 second timeout
- `retries: 2` (CI only) - Retry failed tests twice on CI/CD
- `screenshot: 'only-on-failure'` - Capture screenshots on test failures
- `video: 'retain-on-failure'` - Record video only for failed tests

**For flaky tests**:

```typescript
test('Flaky test', async ({ pom }) => {
  test.setTimeout(180_000); // Extend timeout to 3 minutes
  // or
  test.slow(); // Multiply timeout by 3x
});
```

---

### Environment Variables (`.env`)

- **Location**: `config/.env` (create from `config/.env.example`)
- **Purpose**: Stores environment-specific settings without hardcoding values

**Example**:

```
CI=false
BASE_URL=https://automationexercise.com/
PLAYWRIGHT_HEADLESS=false
```

**Important**: Never commit `.env` files with sensitive credentials!

---

## npm Scripts Explained

| Script                     | Purpose                                  |
| -------------------------- | ---------------------------------------- |
| `npm test`                 | Run all tests in headless mode           |
| `npm run test:ui`          | Interactive UI runner (visual debugging) |
| `npm run test:headed`      | Run tests with visible browser window    |
| `npm run test:scenario`    | Run only scenario tests                  |
| `npm run test:scenario:ui` | Run scenario tests in UI mode            |
| `npm run test:debug`       | Debug mode (pause on breakpoints)        |
| `npm run test:report`      | View HTML report from last run           |
| `npm run lint`             | Check code quality with ESLint           |
| `npm run format`           | Auto-format code with Prettier           |

---

## Best Practices

### 1. **Always use explicit return types**

```typescript
// ✅ Good
async getProductName(): Promise<string> {
  return await this.root.locator('h2').innerText();
}

// ❌ Bad
async getProductName() {
  return this.root.locator('h2').innerText();
}
```

### 2. **Separate synchronous (Locator) and asynchronous (value) methods**

```typescript
// ✅ Good
getCostLocator(): Locator { return this.root.locator('h2'); }
async getCostText(): Promise<string> { return await this.getCostLocator().innerText(); }

// ❌ Bad
async getCost() { return this.root.locator('h2'); }
```

### 3. **Use JSDoc comments for clarity**

```typescript
/**
 * Retrieves the product image source URL.
 * @returns Promise resolving to src attribute or null if not found.
 */
async getProductImage(): Promise<string | null> {
  return await this.root.locator('img').getAttribute('src');
}
```

### 4. **Run lint before committing**

```bash
npm run lint -- --fix    # Auto-fix issues
npm run format           # Format code
```

### 5. **Test locally before pushing**

```bash
# Headed mode to see what's happening
npm run test:headed

# UI mode for interactive debugging
npm run test:ui

# Specific tests
npm run test:scenario
```

---

## CI/CD Environment

When `CI=true`:

- Tests run in **headless mode** (no visible browser)
- Tests have **2 retries** for flaky tests
- Tests run **sequentially** (1 worker) to reduce resource usage
- **test.only() is forbidden** (fails build if left in code)

**Example GitHub Actions setup**:

```yaml
- name: Run tests
  run: npm test
  env:
    CI: true
```

---

## Troubleshooting

**ESLint errors after editing files?**

```bash
npm run lint -- --fix
```

**Tests running slowly?**

- Check if `headless: false` in config (use `true` for CI)
- Reduce number of workers if system is overwhelmed

**Flaky test failures?**

```typescript
test.setTimeout(180_000); // Increase timeout
test.slow(); // Or use 3x multiplier
test.use({ retries: 2 }); // Enable retries for this test
```

**Need to see what's happening?**

```bash
npm run test:headed   # See browser
npm run test:ui       # Interactive UI
npm run test:debug    # Step through code
```

---

## File Structure Best Practices

```
pages/
├── base/                    # Shared base classes
│   ├── BasePage.ts         # All pages inherit from this
│   └── CommonPageMethods.ts # Reusable methods
├── common/                 # Shared components (header, footer)
├── home/
│   ├── HomePage.ts         # Page actions
│   └── HomePageLocators.ts # Only selectors
└── manager/
    └── POManager.ts        # Factory for all pages

tests/
├── scenarios.spec.ts       # Main scenario tests
└── email1.spec.ts         # Feature-specific tests

fixture/
└── pom.fixture.ts         # Test fixtures (pom injection)

utilities/
├── ads-handler.ts         # Shared utilities
└── broken-links-checker.ts
```

**Rule of thumb**: Locators go in `*Locators.ts`, actions/methods in main page class.

---

## Questions or Issues?

Check the main [README.md](../README.md) for additional information.
