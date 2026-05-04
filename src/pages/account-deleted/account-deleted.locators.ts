import { Page } from '@playwright/test';

export class AccountDeletedLocators {
  constructor(private readonly page: Page) {}

  accountDeletedHeading = this.page.locator('b:has-text("Account Deleted!")');
  message1 = this.page.locator('p:has-text("Your account has been permanently deleted!")');
  message2 = this.page.locator('p:has-text("You can create new account to take advantage")');
  continueButton = this.page.getByTestId('continue-button');
}
