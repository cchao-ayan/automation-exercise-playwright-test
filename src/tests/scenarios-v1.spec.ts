import { test } from '../fixture/pom.fixture';
import { testCredentials } from '../config/TestCredentials';

test.describe('Automation Exercises - Test Cases', () => {

    test.beforeEach(async ({ pom }, testInfo) => {
        testInfo.annotations.push({
            type: 'Precondition',
            description: 'The Home Page is loaded successfully'
        });
        await pom.homePage.ready();
    });

    test('Register User', async ({ pom }) => {

        /*
        await test.step('1. Launch browser and Navigate to url "http://automationexercise.com', async () => {
            await pom.homePage.navigateToHomePage('/');
        });

        await test.step('2. Verify that home page is visible successfully', async () => {
            await pom.homePage.verifyHomePageUrl('https://automationexercise.com/');
            await pom.homePage.header.verifyLogoIsVisible();
        });
        */

        await test.step('1. Click on "Signup / Login" button', async () => {
            await pom.homePage.header.clickSignupLoginLink();
            await pom.loginPage.verifyLoginPageUrl('https://automationexercise.com/login');
            await pom.loginPage.header.verifyLogoIsVisible();
        });

        await test.step('2. Verify "New User Signup!" is visible', async () => {
            await pom.loginPage.verifySignUpHeadingIsVisible();
        });

        await test.step('3. Enter name and email address', async () => {
            await pom.loginPage.fillNameAndEmail(testCredentials.name, testCredentials.email1);
        });

        await test.step('4. Click "Signup" button', async () => {
            await pom.loginPage.clickSignUpButton();
        });
        await test.step('5. Fill up the Signup from', async () => {
            await pom.signUpPage.verifySignUpUrl('https://automationexercise.com/signup');
            await pom.signUpPage.header.verifyLogoIsVisible();
            await pom.signUpPage.fillSignUpForm({
                title: 'Mrs',
                name: 'Elizabeth',
                email: testCredentials.email1,
                password: testCredentials.password,
                day: '15',
                month: 'May',
                year: '1990',
                firstName: 'Elizabeth',
                lastName: 'Andromeda',
                company: 'Galaxy Corp',
                address1: '123 Star Lane',
                address2: 'Unit 45',
                country: 'Canada',
                state: 'Aurora',
                city: 'Aurora',
                zipcode: '23001',
                mobileNumber: '123456789123'
            })
        });
        await test.step('6. Click "Create Account" button', async () => {
            await pom.signUpPage.clickCreateAccountButton();
        });
        await test.step('7. Verify that "ACCOUNT CREATED!" is visible', async () => {
            await pom.accountCreatedPage.verifyPageUrl('https://automationexercise.com/account_created');
            await pom.accountCreatedPage.header.verifyLogoIsVisible();
            await pom.accountCreatedPage.verifyHeadingisVisible();
            await pom.accountCreatedPage.verifyText1isVisible();
            await pom.accountCreatedPage.verifyText2isVisible();

        });
        await test.step('8 Click "Continue" button', async () => {
            await pom.accountCreatedPage.clickContinueButton();
        });

        await test.step('9. Verify that "Logged in as <username>" is visible', async () => {
            await pom.homePage.verifyHomePageUrl('https://automationexercise.com/');
            await pom.homePage.header.verifyLogoIsVisible();
            await pom.homePage.header.verifyDeleteButtonIsVisible();
            await pom.homePage.header.verifyLogoutButtonIsVisible();
            await pom.homePage.header.verifyLoggedInUser();
        });
        /*

        await test.step('10. Click "Delete Account" button', async () => {
            await pom.homePage.header.clickDeleteAccountLink();
        });

        await test.step('11. Verify that "ACCOUNT DELETED!" is visible', async () => {
            await pom.accountDeletedPage.verifyAccountDeletedPageURL('https://automationexercise.com/delete_account');
            await pom.accountDeletedPage.header.verifyLogoIsVisible();
            await pom.accountDeletedPage.verifyHeadingisVisible();
            await pom.accountDeletedPage.verifyText1isVisible();
            await pom.accountDeletedPage.verifyText2isVisible();
        });
        await test.step('12. Click "Continue" button', async () => {
            await pom.accountDeletedPage.clickContinueButton();
        });

        await test.step('13. Verify that user is navigated to home page successfully', async () => {

            await pom.homePage.verifyHomePageUrl('https://automationexercise.com/');
            await pom.homePage.header.verifyLogoIsVisible();
            await pom.homePage.header.verifyDeleteButtonIsNotVisible();
            await pom.homePage.header.verifyLogoutButtonIsNotVisible();
        });
        */

    });
});

test.describe('Automation Exercises - Test Cases 2', () => {
    test.use({storageState: 'auth/email1.auth.json'});

    test.beforeEach(async ({ pom }, testInfo) => {
        testInfo.annotations.push({
            type: 'Precondition',
            description: 'The Home Page is loaded successfully'
        });
        await pom.homePage.ready();
    });

    test('Login User with correct email and password', async ({ pom }) => {

        await test.step('1. Click on "Signup / Login" button', async () => {
            await pom.homePage.header.clickSignupLoginLink();
            await pom.loginPage.verifyLoginPageUrl('https://automationexercise.com/login');
            await pom.loginPage.header.verifyLogoIsVisible();
        });

        await test.step('2. Verify "Login to your account" is visible', async () => {
            await pom.signUpPage.verifyLoginToYourAccountIsVisible();
        });

        await test.step('3. Enter correct email address and password', async () => {
            await pom.signUpPage.enterCredentials(testCredentials.email1, testCredentials.password);
        });

        await test.step('4. Click "Login" button', async () => {
            await pom.signUpPage.clickLoginButton();
        });

        await test.step('5. Verify that "Logged in as <username>" is visible', async () => {
            await pom.homePage.verifyHomePageUrl('https://automationexercise.com/');
            await pom.homePage.header.verifyLogoIsVisible();
            await pom.homePage.header.verifyDeleteButtonIsVisible();
            await pom.homePage.header.verifyLogoutButtonIsVisible();
            await pom.homePage.header.verifyLoggedInUser();
        });

        await test.step('6. Click "Delete Account" button', async () => {
            await pom.homePage.header.clickDeleteAccountLink();
        });

        await test.step('7. Verify that "ACCOUNT DELETED!" is visible', async () => {
            await pom.accountDeletedPage.verifyAccountDeletedPageURL('https://automationexercise.com/delete_account');
            await pom.accountDeletedPage.header.verifyLogoIsVisible();
            await pom.accountDeletedPage.verifyHeadingisVisible();
            await pom.accountDeletedPage.verifyText1isVisible();
            await pom.accountDeletedPage.verifyText2isVisible();
        });
        await test.step('8. Click "Continue" button', async () => {
            await pom.accountDeletedPage.clickContinueButton();
        });

        await test.step('9. Verify that user is navigated to home page successfully', async () => {
            await pom.homePage.verifyHomePageUrl('https://automationexercise.com/');
            await pom.homePage.header.verifyLogoIsVisible();
            await pom.homePage.header.verifyDeleteButtonIsNotVisible();
            await pom.homePage.header.verifyLogoutButtonIsNotVisible();
        });
    });

});
