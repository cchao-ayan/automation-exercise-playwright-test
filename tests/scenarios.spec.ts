import { test, expect } from '../fixture/pom.fixture';

test.describe('Automation Exercises - Test Cases', () => {
    test.only('Test Case 1: Register User', async ({ managePage }) => {
        // Navigate to Home Page
        await managePage.homePage.navigateToHomePage('/');
        await managePage.homePage.verifyHomePageUrl('https://automationexercise.com/');
        await managePage.homePage.verifyLogoIsVisible();
        // Navigate to Signup/Login Page
        await managePage.homePage.clickSignupLoginLink();
        await managePage.loginPage.verifyLoginPageUrl('https://automationexercise.com/login');
        await managePage.loginPage.verifyLogoIsVisible();
        await managePage.loginPage.verifySignUpHeadingIsVisible();
        // Input Name and Email
        await managePage.loginPage.fillNameAndEmail('Elizabeth', 'Elizabeth.123TEST@gmail.com');
        // Click Sign Up button 
        await managePage.loginPage.clickSignUpButton();
        await managePage.signUpPage.verifyURL('/signup');
        // Fill Signup Form
        await managePage.signUpPage.fillSignUpForm({
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
        await managePage.signUpPage.clickCreateAccountButton();

    });
});
