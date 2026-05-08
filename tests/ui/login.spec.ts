import { test } from '@core/fixtures/app.fixture';
import { DataReader } from '@shared/utils/data-reader';
import { paths } from '@config/paths';
import { validateLoginInput } from '@features/auth/utils/login.validator';

const data = DataReader.read(paths.data.login.invalidUsers);

test.describe('Login Functionality', () => {
    test.beforeEach(async ({ pom }) => {
        await pom.homePage.navigateToHomePage();
        await pom.homePage.assertPageLoaded();
        await pom.homePage.header.clickSignupLoginLink();
        await pom.loginPage.assertPageLoaded();
    });
    for (const row of data) {
        test(`${row.number}. ${row.scenario}`, async ({ pom }) => {
            await pom.loginPage.login(row.email, row.password);
            const result = validateLoginInput(row.email, row.password);
            await pom.loginPage.assertLoginInputValidation(result);
           
        });
    }
});