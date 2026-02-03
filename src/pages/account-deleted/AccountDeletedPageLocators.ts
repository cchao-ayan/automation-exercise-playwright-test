import { Page } from '@playwright/test';

export const locators = {
  accountDeletedHeading: 'b:has-text("Account Deleted!")',
  text1: 'p:has-text("Your account has been permanently deleted!")',
  text2:
    'p:has-text("You can create new account to take advantage of member privileges to enhance your online shopping experience with us.")',
  continueButton: (page: Page) => page.getByTestId('continue-button'),
};
