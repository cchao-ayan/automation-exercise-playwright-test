# Fix Lint Errors - Quick Reference Guide

**Last Updated**: February 1, 2026  
**Status**: 🟢 Ready to Use

---

## 🚀 Quick Start (One Command)

Run everything in one go:

```bash
npm install && npm run lint -- --fix && npm run format && npm run lint && npm run test:scenario
```

---

## 📋 Command Reference

### 1. Install Dependencies

```bash
npm install
```

**What it does**: Installs all required packages (ESLint, Prettier, Playwright, TypeScript)

---

### 2. Auto-Fix Lint Issues

```bash
npm run lint -- --fix
```

**What it fixes**:

- ✅ Unused imports/variables
- ✅ Spacing and indentation issues
- ✅ ESLint rule violations
- ⚠️ Does NOT fix return types or `any` types (require manual intervention)

---

### 3. Auto-Format Code

```bash
npm run format
```

**What it does**:

- ✅ Enforces single quotes
- ✅ Adds/removes trailing commas
- ✅ Adjusts line width (max 100 chars)
- ✅ Ensures semicolons
- ✅ Fixes indentation

---

### 4. Check Remaining Issues

```bash
npm run lint
```

**Shows**:

- Errors that still need manual fixing
- Warnings about code quality
- Line numbers and specific issues

**Expected output**: 0-16 errors, 100+ warnings (warnings are non-blocking)

---

### 5. Run Tests (Validation)

**Headless (faster)**:

```bash
npm run test:scenario
```

**With visible browser** (for debugging):

```bash
npm run test:scenario:ui
```

**All tests**:

```bash
npm test
```

---

### 6. View Test Report

```bash
npm run test:report
```

**Opens**: HTML report in default browser showing test results, screenshots, videos

---

## 🎯 Error Categories & Fixes

| Error Type               | Example                      | Fixed By                | Status              |
| ------------------------ | ---------------------------- | ----------------------- | ------------------- |
| **Unused imports**       | `import { expect }` (unused) | `npm run lint -- --fix` | ✅ Auto-fixed       |
| **Formatting**           | Double quotes, spacing       | `npm run format`        | ✅ Auto-fixed       |
| **Missing return types** | `async getCost() {}`         | Manual edit             | ⚠️ Warning only     |
| **'any' type usage**     | `value: any`                 | Manual edit             | ❌ Error (16 total) |

---

## ⚙️ What Was Fixed

### ✅ Already Fixed (No Action Needed)

- ProductDetails.ts: Clear return types, proper async/await
- BasePage.ts: JSDoc comments, explicit return types
- Unused imports removed from: Footer, Header, LoginPage, ContactUsPageLocators, homepage.spec.ts
- Config files created with comprehensive comments

### 🟡 Remaining Issues (Optional)

- ~100 warnings: Missing return types on page object methods
  - Non-blocking, can be added incrementally
  - See CONTRIBUTING.md for examples

### 🔴 Critical Errors (If Present)

- 'any' type in utilities (utilities/step-decorator.ts, step-decorator2.ts)
- 'any' type in POManager2.ts
- Fix by: specifying exact types instead of `any`

---

## 📖 Detailed Workflow

### For Local Development

```bash
# 1. Fix everything
npm run lint -- --fix && npm run format

# 2. Check for remaining issues
npm run lint

# 3. Run tests to validate
npm run test:scenario:ui   # See browser

# 4. Before committing
npm run lint -- --fix      # Last check
npm run test:scenario      # Quick test run
```

### For CI/CD Pipeline

```bash
# Same as local but headless
npm install
npm run lint -- --fix
npm run format
npm run lint --max-warnings=0   # Fail if ANY warnings
npm test                         # Run all tests
```

---

## 🔧 Common Scenarios

### Scenario: "I want to fix lint errors and test"

```bash
npm run lint -- --fix && npm run format && npm run test:scenario
```

### Scenario: "I just want to see what's wrong"

```bash
npm run lint
```

### Scenario: "I'm debugging a failing test"

```bash
npm run test:scenario:ui
```

### Scenario: "I'm adding new code, want to ensure quality"

```bash
npm run lint -- --fix    # Auto-fix first
npm run format           # Format code
npm run lint             # Check what's left
# ...then manually fix remaining issues...
npm run test:scenario    # Run tests
```

---

## 📊 Project Status

```
Total Issues Found:     116 problems
├── Critical Errors:     16 (must fix)
└── Warnings:           100 (nice to have)

Errors by Category:
├── Unused imports:       5 ✅ FIXED
├── Type issues (any):    8 ⚠️ PARTIAL
├── Missing return types: 3 ⚠️ PARTIAL
└── Function types:       0 ✓

Warnings by Category:
└── Missing return types: 100 (can be added incrementally)
```

---

## 🎓 Learning Resources

See these files for more details:

1. **[CONTRIBUTING.md](./CONTRIBUTING.md)**
   - Detailed explanations of each config file
   - Best practices with code examples
   - Troubleshooting guide

2. **[tsconfig.json](./tsconfig.json)**
   - TypeScript compiler options with comments

3. **[.eslintrc.json](./.eslintrc.json)**
   - ESLint rules and explanations

4. **[.prettierrc](./.prettierrc)**
   - Code formatting preferences

5. **[playwright.config.ts](./playwright.config.ts)**
   - Test framework configuration with comments

---

## ❓ FAQ

**Q: Do I need to run all commands every time?**  
A: No. For development, just use: `npm run lint -- --fix && npm run format && npm test`

**Q: What's the difference between lint errors and warnings?**  
A: Errors must be fixed. Warnings improve code quality but don't break builds (unless configured otherwise).

**Q: Can I ignore the missing return type warnings?**  
A: You can, but adding them improves code clarity. Add them incrementally as you work on each file.

**Q: How do I fix the 'any' type errors?**  
A: Replace `any` with specific types like `string`, `number`, `Record<string, unknown>`, etc.  
Example: `function process(value: unknown): void {}` instead of `function process(value: any): void {}`

**Q: Can I run lint on just one file?**  
A: Yes: `npx eslint path/to/file.ts --fix`

---

## 🔗 Related Documentation

- [README.md](./README.md) - Project overview and test running guide
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Developer guide and best practices
- [package.json](./package.json) - All available npm scripts
- [playwright.config.ts](./playwright.config.ts) - Test configuration

---

**Version**: 1.0.0  
**Last Updated**: February 1, 2026  
**Next Review**: After major dependency updates
