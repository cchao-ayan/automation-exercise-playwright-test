import { BasePage } from '../base/base.page';
import { expect, Page } from '@playwright/test';
import { routes } from '/config/routes';
import { AccountCreatedLocators } from './login.locators';

export class LoginPage extends BasePage {
  private readonly locators: AccountCreatedLocators;

  constructor(protected readonly page: Page) {
    super(page);
    this.locators = new AccountCreatedLocators(this.page);
  }

  public async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.login}$`));
    await expect(this.locators.logInHeading).toBeVisible();
    await expect(this.locators.newUserHeading).toBeVisible();
  }

  public async login(email: string, password: string): Promise<void> {
    await this.locators.loginEmail.fill(email);
    await this.locators.loginPassword.fill(password);
    await this.locators.loginButton.click();
  }

  public async signUp(username: string, email: string): Promise<void> {
    await this.locators.signupName.fill(username);
    await this.locators.signupEmail.fill(email);
    await this.locators.signupButton.click();
  }

  public async assertLoginFailMessage(message: string): Promise<void> {
    await expect(this.locators.loginErrorMessage).toBeVisible();
    await expect(this.locators.loginErrorMessage).toHaveText(message);
  }

  public async assertRequiredTooltip(field: string, tooltip: string): Promise<void> {
    if (field === 'email') {
      const tooltipMessage = await this.locators.loginEmail.evaluate(
        (el: HTMLInputElement) => el.validationMessage,
      );
      expect(tooltipMessage).toContain(tooltip);
    } else if (field === 'password') {
      const tooltipMessage = await this.locators.loginPassword.evaluate(
        (el: HTMLInputElement) => el.validationMessage,
      );
      expect(tooltipMessage).toContain(tooltip);
    }
  }
}
