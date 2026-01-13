import { test, expect } from '../fixture/pom.fixture';

test.describe('Automation Exercises - Test Cases', () => {
    test.only('Test Case 1: Register User', async ({ pom }) => {
        // Navigate to Home Page
        await pom.homePage.navigateToHomePage('/');
        await pom.homePage.verifyHomePageUrl('https://automationexercise.com/');
        await pom.homePage.header.verifyLogoIsVisible();
        // Navigate to Signup/Login Page
        await pom.header.clickSignupLoginLink();
        await pom.loginPage.verifyLoginPageUrl('https://automationexercise.com/login');
        await pom.loginPage.header.verifyLogoIsVisible();
        await pom.loginPage.verifySignUpHeadingIsVisible();
        // Input Name and Email
        await pom.loginPage.fillNameAndEmail('Elizabeth', 'Elizabeth.123TEST@gmail.com');
        // Click Sign Up button 
        await pom.loginPage.clickSignUpButton();
        await pom.signUpPage.verifyURL('/signup');
        // Fill Signup Form
        await pom.signUpPage.fillSignUpForm({
            title: 'Mrs',
            name: 'Elizabeth',
            email: 'Elizabeth.123TEST@gmail.com',
            password: 'Elizabeth123!',
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
        // Click Account Create button
        await pom.signUpPage.clickCreateAccountButton();

    });
});
