import { test } from '../fixture/pom.fixture';
import { testCredentials } from '../config/TestCredentials';

test('Login using Email 1', async ({ pom, page }) => {
  await pom.homePage.ready();
  await pom.homePage.header.clickSignupLoginLink();
  await pom.loginPage.verifyLoginPageUrl('https://automationexercise.com/login');
  await pom.loginPage.header.verifyLogoIsVisible();
  await pom.signUpPage.enterCredentials(testCredentials.email1, testCredentials.password);
  await pom.signUpPage.clickLoginButton();
  await pom.homePage.verifyHomePageUrl('https://automationexercise.com/');
  await pom.homePage.header.verifyLogoIsVisible();
  await pom.homePage.header.verifyDeleteButtonIsVisible();
  await pom.homePage.header.verifyLogoutButtonIsVisible();

  // ✅ Save authentication state
  await page.context().storageState({
    path: 'auth/email1.auth.json',
  });
});
