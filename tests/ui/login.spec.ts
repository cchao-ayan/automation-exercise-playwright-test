import { test } from '@core/fixtures/app.fixture';
import { DataReader } from '@shared/utils/data/data-reader';
import { paths } from '@config/paths';
import { validateLoginInput, validateSignupInput } from '@features/auth/utils/index';
import { InvalidLoginTestData, InvalidSignupTestData } from '@features/auth/types/index';

const loginData = DataReader.read<InvalidLoginTestData>(paths.data.login.invalidLoginInput);
const signupData = DataReader.read<InvalidSignupTestData>(paths.data.signup.invalidSignupInput);

test.describe('Login Functionality', () => {
    test.beforeEach(async ({ pom }) => {
        await pom.homePage.navigateToHomePage();
        await pom.homePage.assertPageLoaded();
        await pom.homePage.header.clickSignupLoginLink();
        await pom.loginPage.assertPageLoaded();
    });
    for (const row of loginData) {
        test(`Login: ${row.id}. ${row.scenario}`, async ({ pom }) => {
            await pom.loginPage.login(row.email, row.password);
            const result = validateLoginInput(row);
            await pom.loginPage.assertLoginInputValidation(result);

        });
    }

    for (const row of signupData) {
        test(`Signup: ${row.id}. ${row.scenario}`, async ({ pom }) => {
            await pom.loginPage.signUp(row.name, row.email);
            const result = validateSignupInput(row);
            await pom.loginPage.assertSignupInputValidation(result);
        });
    }
});