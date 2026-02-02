#!/bin/bash

################################################################################
# Fix Lint Errors and Code Quality Issues
# 
# Purpose:   Comprehensive guide and commands to fix all linting errors,
#           format code, and validate the Playwright TypeScript project
#
# Usage:     bash ./FIX_LINT_ERRORS.sh
#           or copy individual commands to terminal
#
# Platforms: macOS, Linux, Windows (WSL/Git Bash)
################################################################################

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  Playwright Test Automation - Lint Fix Commands               ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# ============================================================================
# SECTION 1: INSTALL DEPENDENCIES
# ============================================================================
echo "┌─ [1] Installing all dependencies ─────────────────────────────┐"
echo "│ This ensures all tools are available for linting and         │"
echo "│ formatting (ESLint, Prettier, TypeScript)                    │"
echo "└───────────────────────────────────────────────────────────────┘"
echo ""
echo "  $ npm install"
echo ""


# ============================================================================
# SECTION 2: AUTO-FIX FIXABLE LINT ISSUES
# ============================================================================
echo "┌─ [2] Auto-fix fixable ESLint issues ──────────────────────────┐"
echo "│ This command automatically fixes issues that ESLint can      │"
echo "│ resolve:                                                      │"
echo "│   ✓ Unused imports/variables                                 │"
echo "│   ✓ Incorrect spacing                                        │"
echo "│   ✓ Consistent formatting rules                              │"
echo "└───────────────────────────────────────────────────────────────┘"
echo ""
echo "  $ npm run lint -- --fix"
echo ""


# ============================================================================
# SECTION 3: AUTO-FORMAT ALL CODE
# ============================================================================
echo "┌─ [3] Format entire codebase with Prettier ────────────────────┐"
echo "│ Ensures consistent code style across all files:              │"
echo "│   ✓ Single quotes instead of double quotes                   │"
echo "│   ✓ Proper line breaks and indentation                       │"
echo "│   ✓ Trailing commas and semicolons                           │"
echo "│   ✓ Line width limit: 100 characters                         │"
echo "└───────────────────────────────────────────────────────────────┘"
echo ""
echo "  $ npm run format"
echo ""


# ============================================================================
# SECTION 4: VERIFY LINT ERRORS
# ============================================================================
echo "┌─ [4] Run ESLint to check remaining issues ─────────────────────┐"
echo "│ Displays any remaining errors that require manual fixing:    │"
echo "│   ⚠ Type annotations that need explicit types                │"
echo "│   ⚠ Missing return types on functions                        │"
echo "│   ⚠ Use of 'any' type that should be specific                │"
echo "└───────────────────────────────────────────────────────────────┘"
echo ""
echo "  $ npm run lint"
echo ""


# ============================================================================
# SECTION 5: RUN TESTS TO VALIDATE CHANGES
# ============================================================================
echo "┌─ [5] Run scenario tests to ensure code still works ────────────┐"
echo "│ After fixing lint errors, validate with actual test         │"
echo "│ execution:                                                    │"
echo "└───────────────────────────────────────────────────────────────┘"
echo ""
echo "  UI Mode (Interactive debugging, see browser):"
echo "  $ npm run test:scenario:ui"
echo ""
echo "  Headless Mode (Faster, no display):"
echo "  $ npm run test:scenario"
echo ""


# ============================================================================
# SECTION 6: VIEW TEST REPORT
# ============================================================================
echo "┌─ [6] View HTML test report ───────────────────────────────────┐"
echo "│ After tests complete, view detailed results in HTML format  │"
echo "└───────────────────────────────────────────────────────────────┘"
echo ""
echo "  $ npm run test:report"
echo ""


# ============================================================================
# RECOMMENDED WORKFLOW
# ============================================================================
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  RECOMMENDED: Run ALL commands in sequence                     ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
cat << 'EOF'
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

EOF


# ============================================================================
# QUICK COMMANDS FOR SPECIFIC USE CASES
# ============================================================================
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  QUICK REFERENCE: Common Commands                              ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

echo "🎯 One-liner to fix everything and test:"
echo "   npm install && npm run lint -- --fix && npm run format && npm run lint && npm run test:scenario"
echo ""

echo "🔧 Just fix lint (auto-fix + format):"
echo "   npm run lint -- --fix && npm run format"
echo ""

echo "📋 Check lint without fixing:"
echo "   npm run lint"
echo ""

echo "🖥️  Run tests with visible browser (debug):"
echo "   npm run test:scenario:ui"
echo ""

echo "⚡ Run all tests headless (CI mode):"
echo "   npm test"
echo ""

echo "🐛 Debug specific test step-by-step:"
echo "   npm run test:debug"
echo ""


# ============================================================================
# WHAT EACH COMMAND FIXES
# ============================================================================
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  ERROR CATEGORIES & FIXES                                      ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

echo "❌ Error Type: Unused Imports/Variables"
echo "   Example:  import { expect } from '@playwright/test'; // unused"
echo "   Fixed by: npm run lint -- --fix"
echo "   Status:   ✓ Automatically removed"
echo ""

echo "❌ Error Type: Formatting Issues"
echo "   Example:  const x = \"double quotes\"; // should be single"
echo "   Fixed by: npm run format"
echo "   Status:   ✓ Automatically reformatted"
echo ""

echo "⚠️  Warning Type: Missing Return Types"
echo "   Example:  async getCost() { ... } // should specify Promise<string>"
echo "   Fixed by: Manual - Add explicit return types (see CONTRIBUTING.md)"
echo "   Example:  async getCost(): Promise<string> { ... }"
echo "   Note:     This is a WARNING (non-blocking) in our config"
echo ""

echo "⚠️  Error Type: Use of 'any' Type"
echo "   Example:  function process(value: any) { ... } // too loose"
echo "   Fixed by: Manual - Specify exact types"
echo "   Example:  function process(value: Record<string, unknown>) { ... }"
echo "   Priority: Fix these for better type safety"
echo ""


# ============================================================================
# CURRENT PROJECT STATUS
# ============================================================================
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  CURRENT PROJECT STATUS                                        ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

echo "🔴 Critical Errors (must fix):"
echo "   - 16 errors (mostly 'any' type and formatting)"
echo "   - Located in: utilities, CommonPageMethod.ts, POManager2.ts"
echo "   → Action: Run 'npm run lint -- --fix && npm run format'"
echo ""

echo "🟡 Warnings (nice to have):"
echo "   - 100+ warnings for missing return types"
echo "   - These are non-blocking but improve code clarity"
echo "   → Action: Can be addressed incrementally"
echo ""

echo "🟢 Fixed in this session:"
echo "   ✓ ProductDetails.ts - Clear return types, proper async/await"
echo "   ✓ BasePage.ts - JSDoc comments and explicit return types"
echo "   ✓ Unused imports removed (Footer, Header, LoginPage, etc.)"
echo "   ✓ Config files created with comprehensive comments"
echo ""


# ============================================================================
# NEXT STEPS
# ============================================================================
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  NEXT STEPS                                                    ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

echo "1️⃣  Run the one-liner to fix everything:"
echo "    npm install && npm run lint -- --fix && npm run format && npm run test:scenario"
echo ""

echo "2️⃣  Review lint results:"
echo "    npm run lint"
echo ""

echo "3️⃣  Address remaining 'any' types in utilities (optional):"
echo "    - utilities/step-decorator.ts"
echo "    - utilities/step-decorator2.ts"
echo "    - pages/manager/POManager2.ts"
echo ""

echo "4️⃣  Incrementally add missing return types to page objects:"
echo "    - Read CONTRIBUTING.md for best practices"
echo ""

echo "5️⃣  Keep code quality high:"
echo "    - Run 'npm run lint -- --fix' before committing"
echo "    - Run 'npm run format' to maintain consistent style"
echo "    - Write tests to validate changes"
echo ""

echo "╔════════════════════════════════════════════════════════════════╗"
