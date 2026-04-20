import { Page } from '@playwright/test';

export const ACCOUNT_DELETED = (page: Page) => ({
    accountDeletedHeading: page.locator('b:has-text("Account Deleted!")'),
    text1: page.locator('p:has-text("Your account has been permanently deleted!")'),
    text2: page.locator('p:has-text("You can create new account to take advantage")'),
    continueButton: page.getByTestId('continue-button')
}); 