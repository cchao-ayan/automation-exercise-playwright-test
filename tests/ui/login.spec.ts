import { test } from '@core/fixtures/app.fixture';
import { DataReader } from '@shared/utils/data-reader';
import { paths } from '@config/paths';
import { validateLoginInput } from '@features/auth/utils/login.validator';
import { InvalidLoginTestData } from '@features/auth/types/auth.type';

const data = DataReader.read<InvalidLoginTestData>(paths.data.login.invalidUsers);

test.describe('Login Functionality', () => {
    test.beforeEach(async ({ pom }) => {
        await pom.homePage.navigateToHomePage();
        await pom.homePage.assertPageLoaded();
        await pom.homePage.header.clickSignupLoginLink();
        await pom.loginPage.assertPageLoaded();
    });
    for (const row of data) {
        test(`${row.id}. ${row.scenario}`, async ({ pom }) => {
            await pom.loginPage.login(row.email, row.password);
            const result = validateLoginInput(row);
            await pom.loginPage.assertLoginInputValidation(result);
           
        });
    }
});