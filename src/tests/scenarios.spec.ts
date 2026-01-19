import { test } from '../fixture/pom.fixture';
import { testCredentials } from '../config/TestCredentials';

test.describe('Automation Exercises - Test Cases', () => {
    test.only('Test Case 1: Register User', async ({ pom }) => {
        await pom.homePage.navigateToHomePage('/');
        await pom.homePage.verifyHomePageUrl('https://automationexercise.com/');
        await pom.homePage.header.verifyLogoIsVisible();
        await pom.homePage.header.clickSignupLoginLink();
        await pom.loginPage.verifyLoginPageUrl('https://automationexercise.com/login');
        await pom.loginPage.header.verifyLogoIsVisible();
        await pom.loginPage.verifySignUpHeadingIsVisible();
        await pom.loginPage.fillNameAndEmail(testCredentials.name, testCredentials.email);
        await pom.loginPage.clickSignUpButton();
        await pom.signUpPage.verifySignUpUrl('https://automationexercise.com/signup');
        await pom.signUpPage.header.verifyLogoIsVisible();
        await pom.signUpPage.fillSignUpForm({
            title: 'Mrs',
            name: 'Elizabeth',
            email: testCredentials.email,
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
        await pom.signUpPage.clickCreateAccountButton();

        await pom.accountCreatedPage.verifyPageUrl('https://automationexercise.com/account_created');
        await pom.accountCreatedPage.header.verifyLogoIsVisible();
        await pom.accountCreatedPage.verifyHeadingisVisible();
        await pom.accountCreatedPage.verifyText1isVisible();
        await pom.accountCreatedPage.verifyText2isVisible();
        await pom.accountCreatedPage.clickContinueButton();

        await pom.homePage.verifyHomePageUrl('https://automationexercise.com/');
        await pom.homePage.header.verifyLogoIsVisible();
        await pom.homePage.header.verifyDeleteButtonIsVisible();
        await pom.homePage.header.verifyLogoutButtonIsVisible();
        await pom.homePage.header.verifyLoggedInUser();
        await pom.homePage.header.clickDeleteAccountLink();

        await pom.accountDeletedPage.verifyAccountDeletedPageURL('https://automationexercise.com/delete_account');
        await pom.accountDeletedPage.header.verifyLogoIsVisible();
        await pom.accountDeletedPage.verifyHeadingisVisible();
        await pom.accountDeletedPage.verifyText1isVisible();
        await pom.accountDeletedPage.verifyText2isVisible();
        await pom.accountDeletedPage.clickContinueButton();

        await pom.homePage.verifyHomePageUrl('https://automationexercise.com/');
        await pom.homePage.header.verifyLogoIsVisible();
        await pom.homePage.header.verifyDeleteButtonIsNotVisible();
        await pom.homePage.header.verifyLogoutButtonIsNotVisible();

    });
});
