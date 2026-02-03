import { Page } from '@playwright/test';

export const locators = {
  accountCreatedHeading: (page: Page) => page.getByRole('heading', { name: 'Account Created!' }),
  text1: (page: Page) =>
    page.getByText('Congratulations! Your new account has been successfully created!'),
  text2: (page: Page) =>
    page.getByText(
      'You can now take advantage of member privileges to enhance your online shopping experience with us.',
    ),
  continueButton: (page: Page) => page.getByTestId('continue-button'),
};
