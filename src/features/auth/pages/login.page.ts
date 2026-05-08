import { BasePage } from '@core/base/base.page';
import { expect, Page, Locator } from '@playwright/test';
import { routes } from '@config/routes';
import { LoginFields, LoginInternalType, InvalidCredentialScenario } from '../types/auth.type';
import { validateLoginInput } from '../utils/login.validator';

export class LoginPage extends BasePage {

  constructor(protected readonly page: Page) {
    super(page);
  }
  // ======================
  // Locators
  // ======================  
  private readonly logInHeading = this.page.getByText('Login to your account', { exact: true });
  private readonly newUserHeading = this.page.getByText('New User Signup!', { exact: true });
  private readonly loginErrorMessage = this.page.locator('p:has-text("Your email or password is incorrect!")',);
  private readonly existingEmailErrMsg = this.page.locator('p:has-text("Email Address already exist!")');
  private readonly loginEmail = this.page.getByTestId('login-email');
  private readonly loginPassword = this.page.getByTestId('login-password');
  private readonly loginButton = this.page.getByTestId('login-button');
  private readonly signupName = this.page.getByTestId('signup-name');
  private readonly signupEmail = this.page.getByTestId('signup-email');
  private readonly signupButton = this.page.getByTestId('signup-button');

  // ======================
  // Locator Map
  // ======================  
  private readonly loginField: Record<LoginFields, Locator> = {
    email: this.loginEmail,
    password: this.loginPassword,
  }

  // ======================
  // State Methods
  // ======================
  public async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.login}$`));
    await expect(this.logInHeading).toBeVisible();
    await expect(this.newUserHeading).toBeVisible();
  }
  // ======================
  // Action Methods
  // ======================
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
  // ======================
  // Assertion Methods
  // ======================
  public async assertLoginFailMessage(message: string): Promise<void> {
    await expect(this.loginErrorMessage).toBeVisible();
    await expect(this.loginErrorMessage).toHaveText(message);
  }

  // This method asserts the validation tooltip for required fields on the login form.
  public async assertRequiredTooltip(field: LoginFields, tooltip: string): Promise<void> {
    const tooltipMessage = await this.loginField[field].evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    expect(tooltipMessage).toContain(tooltip);
  }

  public async assertLoginInputValidation(result: LoginInternalType): Promise<void> {
    switch (result.type) {
      case 'missing_email':
      case 'missing_at':
      case 'missing_email_and_password':
      case 'missing_before_at':
      case 'missing_after_at':
        await this.assertRequiredTooltip('email', result.message);
        break;

      case 'missing_password':
        await this.assertRequiredTooltip('password', result.message);
        break;

      case 'invalid_credentials':
        await this.assertLoginFailMessage(result.message);
        break;

      default:
        throw new Error(`Unhandled validation type: ${(result as any).type}`);
    }
  }
}
