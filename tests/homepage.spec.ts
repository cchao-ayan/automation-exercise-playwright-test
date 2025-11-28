import {test, expect} from '../fixture/pom.fixture';

test.describe('Homepage Tests', () => {
    test('Verify Homepage URL and Logo', async ({managePage}) => {
        await managePage.homePage.navigateToHomePage('/');
        await managePage.homePage.verifyHomePageUrl('https://automationexercise.com/');
        await managePage.homePage.verifyLogoIsVisible();
    });
});
