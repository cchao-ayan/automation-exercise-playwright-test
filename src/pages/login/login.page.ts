import { BasePage } from '../../base/base.page';
import { expect, Page } from '@playwright/test';
import { ROUTES } from '../../constant/routes.const';
import { ACCOUNT_CREATED } from './login.locators';

export class LoginPage extends BasePage {
  private readonly loginLocator;
  
  constructor(protected readonly page: Page) {
    super(page);
    this.loginLocator = ACCOUNT_CREATED(this.page);
  }

  public async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.LOGIN}$`));
    await expect(this.loginLocator.logInHeading).toBeVisible();
    await expect(this.loginLocator.newUserHeading).toBeVisible();
  }

  public async login(email: string, password: string): Promise<void> {
    //console.log(`Attempting to login with email: ${email} and password: ${password}`); // Debug log for login credentials
    await this.loginLocator.byTestID('login-email').fill(email);
    await this.loginLocator.byTestID('login-password').fill(password);
    await this.loginLocator.byTestID('login-button').click();
  }

  public async signUp(username: string, email: string): Promise<void> {
    await this.loginLocator.byTestID('signup-name').fill(username);
    await this.loginLocator.byTestID('signup-email').fill(email);
    await this.loginLocator.byTestID('signup-button').click();
  }
}
