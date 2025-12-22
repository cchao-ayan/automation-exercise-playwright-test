import {test, expect} from '../fixture/pom.fixture';

test.describe('Homepage Tests', () => {
    test('Verify Homepage URL and Logo', async ({ pom2 }) => {
        await pom2.homePage.navigateToHomePage('/');
        await pom2.homePage.verifyHomePageUrl('https://automationexercise.com/');
        await pom2.homePage.verifyLogoIsVisible();
    });
});
