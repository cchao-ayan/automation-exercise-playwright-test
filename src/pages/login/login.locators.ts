import { Page } from '@playwright/test';

export const ACCOUNT_CREATED = (page: Page) => ({
      logInHeading: page.getByText('Login to your account', { exact: true }),
      newUserHeading: page.getByText('New User Signup!', { exact: true }),
      loginErrorMessage: page.locator('p:has-text("Your email or password is incorrect!")'),
      existingEmailErrMsg: page.locator('p:has-text("Email Address already exist!")'),
      byTestID: (input: string) => page.getByTestId(input)
    });