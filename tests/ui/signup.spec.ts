import { test } from '@core/fixtures/app.fixture';
import { DataReader } from '@shared/utils/data/data-reader';
import { paths } from '@config/paths';
import { validateSignupFormInput } from '@features/auth/utils/signup-form.validator';
import { InvalidSignupFormTestData } from '@features/auth/types/signup-form.type';

const data = DataReader.read<InvalidSignupFormTestData>(paths.data.signup.invalidSignupFormInput);

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
            const result = validateSignupFormInput(row);
            await pom.signUpPage.assertSignupInputValidation(result);
           
        });
    }
});