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
            await pom.loginPage.signUp(testCredentials.name, testCredentials.email1);
            await pom.signUpPage.ready();
            await pom.signUpPage.registerNewAccount();
        });
        await test.step('4. Verify account creation', async () => {
            await pom.accountCreatedPage.verifyAccountIscreated();
        });
        await test.step('5. Verify user is logged-in', async () => {
            await pom.homePage.loggedInUserLandingPage();
        });
        /*
            await test.step('6. Delete user account', async () => {
                await pom.homePage.header.clickDeleteAccountLink();
            });
            await test.step('7. Verify account deletion', async () => {
                await pom.accountDeletedPage.verifyAccountIsDeleted();
            });
            await test.step('9. Verify landing page and user is logged out', async () => {
                await pom.homePage.verifyThatUserIsLoggedOut();
            });
            */
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
            await pom.signUpPage.login(testCredentials.email1, testCredentials.password);
        });
        await test.step('4. Verify user is logged-in', async () => {
            await pom.homePage.loggedInUserLandingPage();
        });
        await test.step('5. Delete user account', async () => {
            await pom.homePage.header.clickDeleteAccountLink();
        });
        await test.step('6. Verify user deletion', async () => {
            await pom.accountDeletedPage.verifyAccountIsDeleted();
        });
        await test.step('7. Verify landing page and user is logged out', async () => {
            await pom.homePage.ready();
        });
    });

    test('Test Case 3: Login User with incorrect email and password', async ({ pom }) => {
        await test.step('1. Launch application', async () => {
            await pom.homePage.navigateToHomePage('/');
        });
        await test.step('2. Verify home page', async () => {
            await pom.homePage.ready();
        });
        await test.step('3. Login invalid credentials', async () => {
            await pom.homePage.header.clickSignupLoginLink();
            await pom.loginPage.ready();
            await pom.signUpPage.login(invalidCredentials.user1.email, invalidCredentials.user1.password);
        });
        await test.step('4. Verify login error message', async () => {
            await pom.signUpPage.verifyLoginErrorMessageIsVisible();
        });
    });

    test('Test Case 4: Logout User', async ({ pom }) => {
        await test.step('1. Launch application', async () => {
            await pom.homePage.navigateToHomePage('/');
        });
        await test.step('2. Verify home page', async () => {
            await pom.homePage.ready();
        });
        await test.step('3. Login valid credentials', async () => {
            await pom.homePage.header.clickSignupLoginLink();
            await pom.loginPage.ready();
            await pom.signUpPage.login(testCredentials.email1, testCredentials.password);
        });
        await test.step('4. Verify user is logged-in', async () => {
            await pom.homePage.loggedInUserLandingPage();
        });
        await test.step('5. Logout user', async () => {
            await pom.homePage.header.clickLogoutLink();
        });
        await test.step('6. Verify user is logged out', async () => {
            await pom.loginPage.logoutLandingPage();
        });
    });

    test('Test Case 5: Register User with existing email', async ({ pom }) => {
        await test.step('1. Launch application', async () => {
            await pom.homePage.navigateToHomePage('/');
        });
        await test.step('2. Verify home page', async () => {
            await pom.homePage.ready();
        });
        await test.step('3. Signup using existing credentials', async () => {
            await pom.homePage.header.clickSignupLoginLink();
            await pom.loginPage.ready();
            await pom.loginPage.signUp(testCredentials.name, testCredentials.email1);
        });

        await test.step('4. Verify error message for existing email', async () => {
            await pom.signUpPage.verifyExistingEmailErrorMessageIsVisible();
        });
    });

    test('Test Case 6: Contact Us Form', async ({ pom }) => {
        await test.step('1. Launch application', async () => {
            await pom.homePage.navigateToHomePage('/');
        });
        await test.step('2. Verify home page', async () => {
            await pom.homePage.ready();
        });
        await test.step('3. Submit contact us form', async () => {
            await pom.homePage.header.clickContactUsLink();
            await pom.contactUsPage.ready();
            await pom.contactUsPage.submitContactUsForm();
        });

        await test.step('4. Verify success message for contact us form', async () => {
            await pom.contactUsPage.verifySuccessMessageIsVisible();
        });

        await test.step('5. Navigate back to home page', async () => {
            await pom.contactUsPage.clickHomeButton();
            await pom.homePage.ready();
        });
    });

    test('Test Case 7: Verify Test Cases Page', async ({ pom }) => {
        await test.step('1. Launch application', async () => {
            await pom.homePage.navigateToHomePage('/');
        });
        await test.step('2. Verify home page', async () => {
            await pom.homePage.ready();
        });
        await test.step('3. Navigate to Test Case link', async () => {
            await pom.TestCasesPage.ready();
        });
    });
    test('Test Case 8: Verify All Products and product detail page', async ({ pom }) => {
        await test.step('1. Launch application', async () => {
            await pom.homePage.navigateToHomePage('/');
        });
        await test.step('2. Verify home page', async () => {
            await pom.homePage.ready();
        });
        await test.step('3. Navigate to Products page', async () => {
            await pom.homePage.header.clickProductsLink();
        });
        await test.step('4. Verify Products page', async () => {
            await pom.productsPage.ready();
            //await pom.productsPage.clickPololink();
        });
        await test.step('4. Verify Products page', async () => {
            await pom.productsPage.ready();
            //await pom.productsPage.clickPololink();
        });
        await test.step('5. Verify feature details', async () => {
            await pom.productsPage.getAllProductDetails();
            //await pom.productsPage.getAllFeaturedProductItems();
        });
    });
    test.fixme('Extra Test Case: Verify All Products and product detail page', async ({ pom }) => {
        await test.step('1. Launch application', async () => {
            await pom.homePage.navigateToHomePage('/');
        });
        await test.step('2. Verify home page', async () => {
            await pom.homePage.ready();
        });

        await test.step('3. Navigate to Products page', async () => {
            await pom.homePage.header.clickProductsLink();
        });

        await test.step('4. Verify Products page', async () => {
            await pom.productsPage.ready();
            //await pom.productsPage.clickPololink();
        });

        await test.step('5. Verify feature details', async () => {
            
            //await pom.productsPage.getAllFeaturedProductItems();
        });
    });
});
