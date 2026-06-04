import { POManager } from '@core/managers/pom.manager';
import { InvalidSignupFormTestData } from '@features/auth/types/index';

// need to fix - use 1. registered user; 2. valid user data for registration
export class AuthFlow {
  constructor(private readonly pom: POManager) {}

  public async loginFlow(username: string, password: string): Promise<void> {
    await this.pom.homePage.header.clickSignupLoginLink();
    await this.pom.loginPage.assertPageLoaded();
    await this.pom.loginPage.login(username, password);
    await this.pom.homePage.header.successfulLogin(username);
  }

  public async registerUserFlow(user: InvalidSignupFormTestData): Promise<void> {
    await this.pom.homePage.header.clickSignupLoginLink();
    await this.pom.loginPage.assertPageLoaded();
    await this.pom.loginPage.signUp(user.name, user.email);
    await this.pom.signUpPage.assertPageLoaded();
    await this.pom.signUpPage.submitSignupForm(user);
  }
}
