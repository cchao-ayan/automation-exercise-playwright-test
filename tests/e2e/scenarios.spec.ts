import { test } from '@core/fixtures/app.fixture';
import { DataReader } from '@shared/utils/data/data-reader';
import { paths } from '@config/paths';
import { RegisteredUser } from '@features/auth/types/login.type';

const data = DataReader.read<RegisteredUser>(paths.data.login.registeredUsers);

test.describe('End to end scenarios', () => {
    test.beforeEach(async ({ pom }) => {
        await pom.homePage.navigateToHomePage();
        await pom.homePage.assertPageLoaded();
        await pom.homePage.header.clickSignupLoginLink();
        await pom.loginPage.assertPageLoaded();
        await pom.loginPage.login(data[0].email, data[0].password);
        await pom.homePage.header.successfulLogin(data[0].username);
    });
    test('Successfully checkout a product', async ({ pom }) => {
        await pom.homePage.header.clickProductsLink();
        await pom.productsPage.assertPageLoaded();
        await pom.productsPage.searchProduct('Dress');
        await pom.productsPage.clickAddToCartButton(0, 'info');
        await pom.productsPage.cartModal.verifyModalAndContinueShopping();
        await pom.productsPage.header.clickCartLink();
        await pom.cartPage.assertPageLoaded();
        await pom.cartPage.clickCheckoutButton();
        await pom.checkoutPage.assertPageLoaded();
        await pom.checkoutPage.clickPlaceOrderButton();
        await pom.paymentPage.assertPageLoaded();
        await pom.paymentPage.clickPayAndConfirmOrderButton();
        await pom.paymentDonePage.assertPageLoaded();
        await pom.paymentDonePage.clickContinueButton();
        await pom.homePage.assertPageLoaded();
    });

});
