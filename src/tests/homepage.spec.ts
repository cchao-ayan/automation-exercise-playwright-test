import { test } from '../fixture/pom.fixture';

test.describe('Homepage Tests', () => {
  test('Verify Homepage URL and Logo', async ({ pom }) => {
    await pom.homePage.verifyHomePageUrl('https://automationexercise.com/');
    await pom.homePage.header.verifyLogoIsVisible();
  });
});
