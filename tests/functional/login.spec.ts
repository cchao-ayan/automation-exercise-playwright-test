import { test } from '/core/fixtures/app.fixture';
import { CsvReader } from '/utils/csv-reader';
import { paths } from '/config/paths';

const data = CsvReader.readCsv(paths.data.usersCsv);

test.describe('Login Functionality', () => {
    test.beforeEach(async ({ pom }) => {
        await pom.homePage.navigateToHomePage();
        await pom.homePage.assertPageLoaded();
        await pom.homePage.header.clickSignupLoginLink();
        await pom.loginPage.assertPageLoaded();
    });
    for (const row of data) {
        test(`${row.scenario } - ${row.email}`, async ({ pom }) => {
            await pom.loginPage.login(row.email, row.password);
            if (row.message) {
                await pom.loginPage.assertLoginFailMessage(row.message); // Add assertion to verify login failure for invalid credentials
            } else if (row.email === '') {
                await pom.loginPage.assertRequiredTooltip('email',row.tooltip); // Add assertion to verify required field tooltip for empty credentials
            } else if (row.password === '') {
                await pom.loginPage.assertRequiredTooltip('password',row.tooltip); // Add assertion to verify required field tooltip for empty credentials
            }  else {
                await pom.homePage.header.successfulLogin(row.name); // Add assertion to verify successful login for valid credentials
            }
        });
    }
});