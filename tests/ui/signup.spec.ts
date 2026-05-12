import { test } from '@core/fixtures/app.fixture';
import { DataReader } from '@shared/utils/data-reader';
import { paths } from '@config/paths';
import { validateSignupInput } from '@features/auth/utils/signup.validator';
import { InvalidSignupTestData } from '@features/auth/types/auth.type';

const data = DataReader.read<InvalidSignupTestData>(paths.data.signup.invalidSignupUsers);

test.describe('Signup Functionality', () => {
    test.beforeEach(async ({ pom }) => {
        await pom.homePage.navigateToHomePage();
        await pom.homePage.assertPageLoaded();
        await pom.homePage.header.clickSignupLoginLink();
        await pom.loginPage.assertPageLoaded();
    });
    for (const row of data) {
        test(`${row.id}. ${row.scenario}`, async ({ pom }) => {
            await pom.loginPage.signUp(row.name, row.email);
            await pom.signUpPage.assertPageLoaded();
            await pom.signUpPage.submitSignupForm(row);
            const result = validateSignupInput(row);
            await pom.signUpPage.assertSignupInputValidation(result);
           
        });
    }
});