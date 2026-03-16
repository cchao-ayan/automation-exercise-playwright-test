#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Fix Lint Errors and Code Quality Issues
    
.DESCRIPTION
    This script contains all the commands needed to fix linting errors, format code,
    and validate the Playwright TypeScript project.
    
    Run individual commands or sections based on your needs.
    
.NOTES
    File:       FIX_LINT_ERRORS.ps1
    Purpose:    Automated error fixing and code quality enforcement
    Usage:      ./FIX_LINT_ERRORS.ps1 or copy individual commands
#>

Write-Host "=== Playwright Test Automation - Lint Fix Commands ===" -ForegroundColor Cyan

# ============================================================================
# SECTION 1: INSTALL DEPENDENCIES
# ============================================================================
Write-Host "`n[1] Installing all dependencies (ESLint, Prettier, TypeScript)" -ForegroundColor Yellow
Write-Host "This ensures all tools are available for linting and formatting`n" -ForegroundColor Gray
Write-Host "npm install`n" -ForegroundColor Green


# ============================================================================
# SECTION 2: AUTO-FIX FIXABLE LINT ISSUES
# ============================================================================
Write-Host "[2] Auto-fix fixable ESLint issues" -ForegroundColor Yellow
Write-Host "This command automatically fixes issues that ESLint can resolve:`n" -ForegroundColor Gray
Write-Host "  - Unused imports/variables" -ForegroundColor Gray
Write-Host "  - Incorrect spacing" -ForegroundColor Gray
Write-Host "  - Consistent formatting" -ForegroundColor Gray
Write-Host "`nnpm run lint -- --fix`n" -ForegroundColor Green


# ============================================================================
# SECTION 3: AUTO-FORMAT ALL CODE
# ============================================================================
Write-Host "[3] Format entire codebase with Prettier" -ForegroundColor Yellow
Write-Host "This ensures consistent code style across all files:`n" -ForegroundColor Gray
Write-Host "  - Single quotes instead of double quotes" -ForegroundColor Gray
Write-Host "  - Proper line breaks and indentation" -ForegroundColor Gray
Write-Host "  - Trailing commas and semicolons" -ForegroundColor Gray
Write-Host "  - Line width limit: 100 characters" -ForegroundColor Gray
Write-Host "`nnpm run format`n" -ForegroundColor Green


# ============================================================================
# SECTION 4: VERIFY LINT ERRORS
# ============================================================================
Write-Host "[4] Run ESLint to check remaining issues (after fixes)" -ForegroundColor Yellow
Write-Host "Displays any remaining errors that require manual fixing:`n" -ForegroundColor Gray
Write-Host "  - Type annotations that need explicit types" -ForegroundColor Gray
Write-Host "  - Missing return types on functions" -ForegroundColor Gray
Write-Host "  - Use of 'any' type that should be specific" -ForegroundColor Gray
Write-Host "`nnpm run lint`n" -ForegroundColor Green


# ============================================================================
# SECTION 5: RUN TESTS TO VALIDATE CHANGES
# ============================================================================
Write-Host "[5] Run scenario tests to ensure code still works" -ForegroundColor Yellow
Write-Host "After fixing lint errors, validate with actual test execution:`n" -ForegroundColor Gray
Write-Host "  - Headed mode (see browser window)" -ForegroundColor Gray
Write-Host "`nnpm run test:scenario:ui`n" -ForegroundColor Green

Write-Host "  - Headless mode (faster, no display)" -ForegroundColor Gray
Write-Host "`nnpm run test:scenario`n" -ForegroundColor Green


# ============================================================================
# SECTION 6: VIEW TEST REPORT
# ============================================================================
Write-Host "[6] View HTML test report" -ForegroundColor Yellow
Write-Host "After tests complete, view detailed results:`n" -ForegroundColor Gray
Write-Host "npm run test:report`n" -ForegroundColor Green


# ============================================================================
# RECOMMENDED WORKFLOW (All in sequence)
# ============================================================================
Write-Host "`n════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "RECOMMENDED: Run ALL commands in sequence" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════════════════════════════`n" -ForegroundColor Cyan

Write-Host @"
# Step 1: Install dependencies
npm install

# Step 2: Auto-fix all fixable issues
npm run lint -- --fix

# Step 3: Format all code
npm run format

# Step 4: Check remaining issues
npm run lint

# Step 5: Run tests (headless, faster)
npm run test:scenario

# Step 6: View results
npm run test:report

"@ -ForegroundColor Yellow


# ============================================================================
# QUICK COMMANDS FOR SPECIFIC USE CASES
# ============================================================================
Write-Host "`n════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "QUICK REFERENCE: Common Commands" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════════════════════════════`n" -ForegroundColor Cyan

Write-Host "One-liner to fix everything and test:" -ForegroundColor Yellow
Write-Host "npm install && npm run lint -- --fix && npm run format && npm run lint && npm run test:scenario`n" -ForegroundColor Green

Write-Host "Just fix lint (auto + format):" -ForegroundColor Yellow
Write-Host "npm run lint -- --fix && npm run format`n" -ForegroundColor Green

Write-Host "Check lint without fixing:" -ForegroundColor Yellow
Write-Host "npm run lint`n" -ForegroundColor Green

Write-Host "Run tests with visible browser (debug):" -ForegroundColor Yellow
Write-Host "npm run test:scenario:ui`n" -ForegroundColor Green

Write-Host "Run all tests headless (CI mode):" -ForegroundColor Yellow
Write-Host "npm test`n" -ForegroundColor Green

Write-Host "Debug specific test:" -ForegroundColor Yellow
Write-Host "npm run test:debug`n" -ForegroundColor Green


# ============================================================================
# WHAT EACH COMMAND FIXES
# ============================================================================
Write-Host "`n════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "ERROR CATEGORIES & FIXES" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════════════════════════════`n" -ForegroundColor Cyan

Write-Host "Error Type: Unused Imports/Variables" -ForegroundColor Yellow
Write-Host "  Example: import { expect } from '@playwright/test'; // unused" -ForegroundColor Gray
Write-Host "  Fixed by: npm run lint -- --fix" -ForegroundColor Green
Write-Host "  Status:   ✓ Automatically removed`n" -ForegroundColor Green

Write-Host "Error Type: Formatting Issues" -ForegroundColor Yellow
Write-Host "  Example: const x = 'double quotes'; // should be single" -ForegroundColor Gray
Write-Host "  Fixed by: npm run format" -ForegroundColor Green
Write-Host "  Status:   ✓ Automatically reformatted`n" -ForegroundColor Green

Write-Host "Error Type: Missing Return Types" -ForegroundColor Yellow
Write-Host "  Example: async getCost() { ... } // should specify Promise<string>" -ForegroundColor Gray
Write-Host "  Fixed by: Manual - Add explicit return types (see CONTRIBUTING.md)" -ForegroundColor Yellow
Write-Host "  Example:  async getCost(): Promise<string> { ... }" -ForegroundColor Green
Write-Host "  Note:     This is a WARNING (non-blocking) in our config`n" -ForegroundColor Cyan

Write-Host "Error Type: Use of 'any' Type" -ForegroundColor Yellow
Write-Host "  Example: function process(value: any) { ... } // too loose" -ForegroundColor Gray
Write-Host "  Fixed by: Manual - Specify exact types (see utilities/step-decorator.ts)" -ForegroundColor Yellow
Write-Host "  Example:  function process(value: Record<string, unknown>) { ... }" -ForegroundColor Green
Write-Host "  Priority: Fix these for better type safety`n" -ForegroundColor Cyan


# ============================================================================
# CURRENT PROJECT STATUS
# ============================================================================
Write-Host "`n════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "CURRENT PROJECT STATUS" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════════════════════════════`n" -ForegroundColor Cyan

Write-Host "Critical Errors (must fix):" -ForegroundColor Red
Write-Host "  - 16 errors (mostly 'any' type and formatting)" -ForegroundColor Red
Write-Host "  - Located in: utilities, CommonPageMethod.ts, POManager2.ts" -ForegroundColor Red
Write-Host "  Action: Run 'npm run lint -- --fix && npm run format'" -ForegroundColor Yellow

Write-Host "`nWarnings (nice to have):" -ForegroundColor Yellow
Write-Host "  - 100+ warnings for missing return types" -ForegroundColor Yellow
Write-Host "  - These are non-blocking but improve code clarity" -ForegroundColor Yellow
Write-Host "  Action: Can be addressed incrementally" -ForegroundColor Gray

Write-Host "`nFixed in this session:" -ForegroundColor Green
Write-Host "  ✓ ProductDetails.ts - Clear return types, proper async/await" -ForegroundColor Green
Write-Host "  ✓ BasePage.ts - JSDoc comments and explicit return types" -ForegroundColor Green
Write-Host "  ✓ Unused imports removed (Footer, Header, LoginPage, etc.)" -ForegroundColor Green
Write-Host "  ✓ Config files created with comprehensive comments" -ForegroundColor Green


# ============================================================================
# NEXT STEPS
# ============================================================================
Write-Host "`n════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "NEXT STEPS" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════════════════════════════`n" -ForegroundColor Cyan

Write-Host "1. Run the one-liner to fix everything:" -ForegroundColor Cyan
Write-Host "   npm install && npm run lint -- --fix && npm run format && npm run test:scenario`n" -ForegroundColor Green

Write-Host "2. Review lint results:" -ForegroundColor Cyan
Write-Host "   npm run lint`n" -ForegroundColor Green

Write-Host "3. Address remaining 'any' types in utilities (optional):" -ForegroundColor Cyan
Write-Host "   - See utilities/step-decorator.ts" -ForegroundColor Gray
Write-Host "   - See utilities/step-decorator2.ts" -ForegroundColor Gray
Write-Host "   - See pages/manager/POManager2.ts`n" -ForegroundColor Gray

Write-Host "4. Incrementally add missing return types to page objects:" -ForegroundColor Cyan
Write-Host "   Read CONTRIBUTING.md for best practices`n" -ForegroundColor Green

Write-Host "5. Keep code quality high:" -ForegroundColor Cyan
Write-Host "   - Run 'npm run lint -- --fix' before committing" -ForegroundColor Gray
Write-Host "   - Run 'npm run format' to maintain consistent style" -ForegroundColor Gray
Write-Host "   - Write tests to validate changes`n" -ForegroundColor Gray

Write-Host "═════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
