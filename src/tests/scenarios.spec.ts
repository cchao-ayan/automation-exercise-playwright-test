import { test } from '../fixture/pom.fixture';
import { testCredentials } from '../config/TestCredentials';
import { invalidCredentials } from '../config/InvalidCredentials';

test.describe('Automation Exercises - Test Cases', () => {

    test('Test Case 1: Register User', async ({ pom }) => {

        await test.step('1. Launch application', async () => {
            await pom.homePage.navigateToHomePage('/');
        });

        await test.step('2. Verify home page', async () => {
            await pom.homePage.ready();
        });

        await test.step('3. Register a new account', async () => {
            await pom.homePage.header.clickSignupLoginLink();
            await pom.loginPage.ready();
            await pom.loginPage.fillNameAndEmail(testCredentials.name, testCredentials.email1);
            await pom.loginPage.clickSignUpButton();
            await pom.signUpPage.ready();
            await pom.signUpPage.fillSignUpForm();
            await pom.signUpPage.clickCreateAccountButton();
        });
        await test.step('4. Verify account creation', async () => {
            await pom.accountCreatedPage.verifyAccountIscreated();
        });
        await test.step('5. Verify user is logged-in', async () => {
            await pom.homePage.verifyThatUserIsLoggedIn();
        });
        await test.step('6. Delete user account', async () => {
            await pom.homePage.header.clickDeleteAccountLink();
        });
        await test.step('7. Verify account deletion', async () => {
            await pom.accountDeletedPage.verifyAccountIsDeleted();
        });
        await test.step('9. Verify landing page and user is logged out', async () => {
            await pom.homePage.verifyThatUserIsLoggedOut();
        });
    });

    test('Test Case 2: Login User with correct email and password', async ({ pom }) => {

        await test.step('1. Launch application', async () => {
            await pom.homePage.navigateToHomePage('/');
        });
        await test.step('2. Verify home page', async () => {
            await pom.homePage.ready();
        });
        await test.step('3. Login valid credentials', async () => {
            await pom.homePage.header.clickSignupLoginLink();
            await pom.loginPage.ready();
            await pom.signUpPage.enterCredentials();
            await pom.signUpPage.clickLoginButton();
        });
        await test.step('4. Verify user is logged-in', async () => {
            await pom.homePage.verifyThatUserIsLoggedIn();
        });
        await test.step('5. Delete user account', async () => {
            await pom.homePage.header.clickDeleteAccountLink();
        });
        await test.step('6. Verify user deletion', async () => {
            await pom.accountDeletedPage.verifyAccountIsDeleted();
        });
        await test.step('7. Verify landing page and user is logged out', async () => {
            await pom.homePage.verifyThatUserIsLoggedOut();
        });
    });

    test.skip('Test Case 3: Login User with incorrect email and password', async ({ pom }) => {       


    });

});
