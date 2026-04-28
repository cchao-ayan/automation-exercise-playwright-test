import { Page } from '@playwright/test';

export class AccountCreatedLocators {
  constructor(private readonly page: Page) { }

  readonly logInHeading = this.page.getByText('Login to your account', { exact: true });
  readonly newUserHeading = this.page.getByText('New User Signup!', { exact: true });
  readonly loginErrorMessage = this.page.locator('p:has-text("Your email or password is incorrect!")');
  readonly existingEmailErrMsg = this.page.locator('p:has-text("Email Address already exist!")');
  readonly loginEmail = this.page.getByTestId('login-email');
  readonly loginPassword = this.page.getByTestId('login-password');
  readonly loginButton = this.page.getByTestId('login-button');
  readonly signupName = this.page.getByTestId('signup-name');
  readonly signupEmail = this.page.getByTestId('signup-email');
  readonly signupButton = this.page.getByTestId('signup-button');
}