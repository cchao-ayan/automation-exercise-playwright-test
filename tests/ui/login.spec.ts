import { test } from '/core/fixtures/app.fixture';
import { DataReader } from '../../src/shared/utils/data-reader';
import { paths } from '/config/paths';

const data = DataReader.read(paths.data.login.invalidUsers);

test.describe('Login Functionality', () => {
    test.beforeEach(async ({ pom }) => {
        await pom.homePage.navigateToHomePage();
        await pom.homePage.assertPageLoaded();
        await pom.homePage.header.clickSignupLoginLink();
        await pom.loginPage.assertPageLoaded();
    });
    for (const row of data) {
        test(`${row.number}. ${row.scenario} - ${row.category}`, async ({ pom }) => {
            await pom.loginPage.login(row.email, row.password);
            switch (row.scenario.toLowerCase()) {
                case 'valid credentials':
                    await pom.homePage.header.successfulLogin(row.name); // Add assertion to verify successful login for valid credentials
                    break;
                case 'invalid credentials':
                    if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(row.email) && row.password.length > 0) {
                        await pom.loginPage.assertLoginFailMessage(row.message); // Add assertion to verify login failure for invalid credentials
                    }
                    await pom.loginPage.assertLoginFailMessage(row.message); // Add assertion to verify login failure for invalid credentials
                    if (/@/.test(row.email)) {
                        await pom.loginPage.assertRequiredTooltip('email', row.tooltip); // Add assertion to verify required field tooltip for empty credentials                        
                    }
                    if (/.+@/.test(row.email)) {
                        await pom.loginPage.assertRequiredTooltip('email', row.tooltip); // Add assertion to verify required field tooltip for empty credentials
                    }
                    if (/@.+/.test(row.email)) {
                        await pom.loginPage.assertRequiredTooltip('email', row.tooltip); // Add assertion to verify required field tooltip for empty credentials
                    }
                    if (row.email === '') {
                        await pom.loginPage.assertRequiredTooltip('email', row.tooltip); // Add assertion to verify required field tooltip for empty credentials
                    }
                    if (row.password === '') {
                        await pom.loginPage.assertRequiredTooltip('password', row.tooltip); // Add assertion to verify required field tooltip for empty credentials
                    }
                    break;
                default:
                    throw new Error(`The scenario "${row.scenario}" is not supported. Only "valid credentials", and "invalid credentials" are supported.`);
            }
        });
    }
});