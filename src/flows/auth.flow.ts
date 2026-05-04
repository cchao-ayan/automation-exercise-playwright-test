import { POManager } from '/pages';

export class AuthFlow {
  constructor(private readonly pom: POManager) {}

  public async loginFlow(username: string, password: string): Promise<void> {
    await this.pom.homePage.header.clickSignupLoginLink();
    await this.pom.loginPage.assertPageLoaded();
    await this.pom.loginPage.login(username, password);
    await this.pom.homePage.header.successfulLogin(username);
  }

  public async registerUserFlow(username: string, email: string): Promise<void> {
    await this.pom.homePage.header.clickSignupLoginLink();
    await this.pom.loginPage.assertPageLoaded();
    await this.pom.loginPage.signUp(username, email);
    await this.pom.signUpPage.assertPageLoaded();
    await this.pom.signUpPage.registerNewAccount(username);
  }
}
