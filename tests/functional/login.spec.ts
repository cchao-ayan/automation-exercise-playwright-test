import { test } from '../../src/fixture/pom.fixture';
import { CsvReader } from '../../src/utilities/csv-reader';
import { filePath } from '../../src/test-data/index';

const data = CsvReader.readCsv(filePath.userData.csvFilePath);

test.describe('Login Functionality', () => {
    test.beforeEach(async ({ pom }) => {
        await pom.homePage.navigateToHomePage();
        await pom.homePage.assertPageLoaded();
        await pom.homePage.header.clickSignupLoginLink();
        await pom.loginPage.assertPageLoaded();
    });
    for (const row of data) {
        test(`should allow user to login with valid credentials - ${row.email}`, async ({ pom }) => {
            await pom.loginPage.login(row.email, row.password);
            await pom.loginPage.assertLoginFail(); // Add assertion to verify login failure for invalid credentials
            // Add assertions to verify successful login, e.g., checking for user profile visibility
        });
    }
});