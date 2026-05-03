import { test } from '/core/fixtures/app.fixture';
import { registerUserFlow } from '/flows/auth/register.flow';
import { filterByKeyword } from '/utils';

test.describe('Automation Exercises - Test Cases', () => {
    test.beforeEach(async ({ pom }) => {
        await pom.homePage.navigateToHomePage();
        await pom.homePage.assertPageLoaded();
    });
    test('Test Case 1: Register User', async ({ pom }) => {
        await test.step('Register a new account', async () => {
            await registerUserFlow(pom, 'youzin', 'zoozoo-un@gmail.com');
        });
        await test.step('Verify account creation', async () => {
            await pom.accountCreatedPage.assertPageLoaded();
            await pom.accountCreatedPage.clickContinueButton();
        });
        await test.step('Verify user is logged-in', async () => {
            await pom.homePage.header.successfulLogin('Youzin');
        });
        await test.step('Delete user account', async () => {
            await pom.homePage.header.clickDeleteAccountLink();
        });
        await test.step('Verify account deletion', async () => {
            await pom.accountDeletedPage.assertPageLoaded();
            await pom.accountDeletedPage.clickContinueButton();
        });
        await test.step('Verify landing page and user is logged out', async () => {
            await pom.homePage.header.successfulLogout();
        });
    });
});

test.skip('Test Case 2: Login User with correct email and password', async ({ pom }) => {
    await test.step('2. Login valid credentials', async () => {
        await pom.homePage.header.clickSignupLoginLink();
        await pom.loginPage.assertPageLoaded();
        await pom.loginPage.login('zoozoo-un@gmail.com', 'youzin');
    });
    await test.step('3. Verify user is logged-in', async () => {
        await pom.homePage.header.successfulLogin('Youzin');
    });
    await test.step('4. Delete user account', async () => {
        await pom.homePage.header.clickDeleteAccountLink();
    });
    await test.step('5. Verify user deletion', async () => {
        await pom.accountDeletedPage.assertPageLoaded();
        await pom.accountDeletedPage.clickContinueButton();
    });
    await test.step('6. Verify landing page and user is logged out', async () => {
        await pom.homePage.assertPageLoaded();
        await pom.homePage.header.successfulLogout();
    });
});
/**

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
}
/*
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
        await pom.contactUsPage.verifySuccessMessageState();
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
    });
    await test.step('5. Verify feature details', async () => {
        await pom.productsPage.compareProductCardDetailsWithTestDataByIndex(0);
    });
    await test.step('6. Click on first product and verify URL contains its ID', async () => {
        // grab the id from the card before we navigate away
        const productID = await pom.productsPage.getProductID(pom.productsPage.productAt(0));

        // click through to the details page
        await pom.productsPage.clickViewProductButtonByIndex(0);

        // the page object already checks the static portion of the url, use it again
        await pom.productDetailsPage.ready(`/product_details/${productID}`);
    });
    await test.step('7. Verify product detail is visible and correct', async () => {
        // details page should already be loaded from the previous step
        await pom.productDetailsPage.compareProductDetailsWithTestData(0);
    });
});

test('Test Case 9: Search Product', async ({ pom }) => {
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
    });
    await test.step('5. Search for a product', async () => {
        await pom.productsPage.searchProduct('tops');
        await pom.productsPage.clickSearchProductButton();
        await pom.productsPage.verifySearchProductHeading();
    })
    await test.step('6. Verify all searched products are related to the search key', async () => {
        const result = filterByKeyword(productsData, 'tops');
        //Logger.info(JSON.stringify(result, null, 2));
        //console.log(result);
    })
});
















test('Extra Test Case 1: Verify that all product card details are correct', async ({ pom }) => {
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
    });
    await test.step('5. Verify feature details', async () => {
        await pom.productsPage.verifyProductCardDetailsAreCorrect();
    });
});

});
**/
