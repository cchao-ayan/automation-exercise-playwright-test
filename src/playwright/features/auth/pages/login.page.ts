import { BasePage } from 'src/playwright/core/base/base.page';
import { expect, Page, Locator } from '@playwright/test';
import { routes } from 'src/playwright/config/routes';
import { LoginFields, LoginValidationResult, SignupFields, SignupValidationResult } from '@playwright-features/auth/types/index';
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

  private readonly signupField: Record<SignupFields, Locator> = {
    name: this.signupName,
    email: this.signupEmail,
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
  public async login(email?: string, password?: string): Promise<void> {
    if (email !== undefined) {
      await this.loginEmail.fill(email);
    }
    if (password !== undefined) {
      await this.loginPassword.fill(password);
    }
    await this.loginButton.click();
  }

  public async signUp(name?: string, email?: string): Promise<void> {
    if (name !== undefined) {
      await this.signupName.fill(name);
    }
    if (email !== undefined) {
      await this.signupEmail.fill(email);
    }
    await this.signupButton.click();
  }
  // ======================
  // Assertion Methods
  // ======================
  public async assertLoginFailMessage(message: string): Promise<void> {
    await expect(this.loginErrorMessage).toBeVisible();
    await expect(this.loginErrorMessage).toHaveText(message);
  }

  public async assertExistingEmailMessage(message: string): Promise<void> {
    await expect(this.existingEmailErrMsg).toBeVisible();
    await expect(this.existingEmailErrMsg).toHaveText(message);
  }

  // // This method asserts the validation tooltip for required fields on the login form.
  // public async assertRequiredTooltip(field: LoginFields, tooltip: string): Promise<void> {
  //   const tooltipMessage = await this.loginField[field].evaluate(
  //     (el: HTMLInputElement) => el.validationMessage
  //   );
  //   expect(tooltipMessage).toContain(tooltip);
  // }

  public async assertLoginInputValidation(result: LoginValidationResult): Promise<void> {
    switch (result.type) {
      case 'missing_email':
      case 'missing_at':
      case 'missing_email_and_password':
      case 'missing_before_at':
      case 'missing_after_at':
      case 'invalid_domain_char':
        await this.assertErrorMessage(this.loginField['email'], result.message);
        break;

      case 'missing_password':
        await this.assertErrorMessage(this.loginField['password'], result.message);
        break;

      case 'invalid_credentials':
        await this.assertLoginFailMessage(result.message);
        break;

      default:
        throw new Error(`Unhandled validation type: ${(result as any).type}`);
    }
  }

  public async assertSignupInputValidation(result: SignupValidationResult): Promise<void> {
    switch (result.type) {
      case 'missing_email':
      case 'missing_at':
      case 'missing_before_at':
      case 'missing_after_at':
      case 'invalid_domain_char':
        await this.assertErrorMessage(this.signupField['email'], result.message);
        break;

      case 'missing_name_and_email':
      case 'missing_name':
        await this.assertErrorMessage(this.signupField['name'], result.message);
        break;

      case 'email_exists':
        await this.assertExistingEmailMessage(result.message);
        break;

      default:
        throw new Error(`Unhandled validation type: ${(result as any).type}`);
    }
  }
}
