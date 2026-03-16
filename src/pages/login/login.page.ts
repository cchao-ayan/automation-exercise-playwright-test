import { BasePage } from '@/base/base.page';
import { Locator, expect } from '@playwright/test';
import { ROUTES } from '@/constant/routes.const';

export class LoginPage extends BasePage {
  // ======================
  // Locators
  // ======================
  private get logInHeading(): Locator { return this.page.getByText('Login to your account', { exact: true }) };
  private get newUserHeading(): Locator { return this.page.getByText('New User Signup!', { exact: true }) };
  private get loginErrorMessage(): Locator { return this.page.locator('p:has-text("Your email or password is incorrect!")') };
  private get existingEmailErrMsg(): Locator { return this.page.locator('p:has-text("Email Address already exist!")') };

  private byTestID(input: string): Locator { return this.page.getByTestId(input); }

  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.SIGNUP_LOGIN}$`));
    await expect(this.logInHeading).toBeVisible();
    await expect(this.newUserHeading).toBeVisible();
  }

  protected async login(email: string, password: string): Promise<void> {
    await this.byTestID('login-email').fill(email);
    await this.byTestID('login-password').fill(password);
    await this.byTestID('login-button').click();
  }

  protected async signup(username: string, email: string): Promise<void> {
    await this.byTestID('signup-name').fill(username);
    await this.byTestID('signup-email').fill(email);
    await this.byTestID('signup-button').click();
  }
}
