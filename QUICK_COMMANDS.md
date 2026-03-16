# 🚀 QUICK COMMAND CARD

## One-Liner (Do Everything)

```bash
npm install && npm run lint -- --fix && npm run format && npm run lint && npm run test:scenario
```

---

## Essential Commands

| What         | Command                    | Purpose                                      |
| ------------ | -------------------------- | -------------------------------------------- |
| **Install**  | `npm install`              | Set up dependencies (ESLint, Prettier, etc.) |
| **Auto-Fix** | `npm run lint -- --fix`    | Remove unused imports, fix spacing           |
| **Format**   | `npm run format`           | Fix quotes, commas, line width               |
| **Check**    | `npm run lint`             | Show remaining issues                        |
| **Test**     | `npm run test:scenario`    | Run tests (headless, fast)                   |
| **Test UI**  | `npm run test:scenario:ui` | Run tests with visible browser               |
| **Report**   | `npm run test:report`      | View HTML test report                        |

---

## By Use Case

### 🔧 Just Fix Everything

```bash
npm run lint -- --fix && npm run format
```

### 🐛 Debug Tests

```bash
npm run test:scenario:ui
```

### ✅ Validate Changes

```bash
npm run test:scenario && npm run lint
```

### 📊 See What's Wrong

```bash
npm run lint
```

### ⚡ Run All Tests

```bash
npm test
```

---

## Error Categories

| Issue         | Example                  | Command      | Auto?  |
| ------------- | ------------------------ | ------------ | ------ |
| Unused import | `import { x }` unused    | `lint --fix` | ✅ Yes |
| Wrong quotes  | `"text"` → `'text'`      | `format`     | ✅ Yes |
| Bad spacing   | Inconsistent indentation | `format`     | ✅ Yes |
| Missing types | `function foo() {}`      | Manual edit  | ❌ No  |
| `any` type    | `value: any`             | Manual edit  | ❌ No  |

---

## Status Summary

```
Total Issues: 116
├── Fixed by auto-fix: 5 ✅
├── Fixed by format:   Can be many ✅
├── Need manual fix:   16 (mostly 'any' types)
└── Warnings only:     100 (missing return types)
```

---

## Next Steps

1. Run: `npm run lint -- --fix && npm run format`
2. Check: `npm run lint`
3. Test: `npm run test:scenario`
4. Optional: Fix remaining `any` types manually
5. Read: [CONTRIBUTING.md](./CONTRIBUTING.md) for details

---

## File Reference

📄 **FIX_LINT_ERRORS.md** - Start here (quick guide)  
📝 **FIX_LINT_ERRORS.ps1** - Windows PowerShell script  
🔧 **FIX_LINT_ERRORS.sh** - Bash script (Linux/macOS)  
📋 **CONTRIBUTING.md** - Detailed best practices

---

**Last Updated**: February 1, 2026
