import { BasePage } from '@core/base/base.page';
import { expect, Page } from '@playwright/test';
import { routes } from '@config/routes';

export class LoginPage extends BasePage {

  constructor(protected readonly page: Page) {
    super(page);
  }
  readonly logInHeading = this.page.getByText('Login to your account', { exact: true });
  readonly newUserHeading = this.page.getByText('New User Signup!', { exact: true });
  readonly loginErrorMessage = this.page.locator('p:has-text("Your email or password is incorrect!")',);
  readonly existingEmailErrMsg = this.page.locator('p:has-text("Email Address already exist!")');
  readonly loginEmail = this.page.getByTestId('login-email');
  readonly loginPassword = this.page.getByTestId('login-password');
  readonly loginButton = this.page.getByTestId('login-button');
  readonly signupName = this.page.getByTestId('signup-name');
  readonly signupEmail = this.page.getByTestId('signup-email');
  readonly signupButton = this.page.getByTestId('signup-button');

  public async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.login}$`));
    await expect(this.logInHeading).toBeVisible();
    await expect(this.newUserHeading).toBeVisible();
  }

  public async login(email: string, password: string): Promise<void> {
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }

  public async signUp(username: string, email: string): Promise<void> {
    await this.signupName.fill(username);
    await this.signupEmail.fill(email);
    await this.signupButton.click();
  }

  public async assertLoginFailMessage(message: string): Promise<void> {
    await expect(this.loginErrorMessage).toBeVisible();
    await expect(this.loginErrorMessage).toHaveText(message);
  }

  public async assertRequiredTooltip(field: string, tooltip: string): Promise<void> {
    if (field === 'email') {
      const tooltipMessage = await this.loginEmail.evaluate(
        (el: HTMLInputElement) => el.validationMessage,
      );
      expect(tooltipMessage).toContain(tooltip);
    } else if (field === 'password') {
      const tooltipMessage = await this.loginPassword.evaluate(
        (el: HTMLInputElement) => el.validationMessage,
      );
      expect(tooltipMessage).toContain(tooltip);
    }
  }
}
