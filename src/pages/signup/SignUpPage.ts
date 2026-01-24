import { BasePage } from "../base/BasePage";
import { locators } from "./SignUpPageLocators";
import { testData } from "./SignUpTestData";

export class SignUpPage extends BasePage {

    async ready() {
        await this.verifySignUpUrl('https://automationexercise.com/signup');
        await this.header.verifyLogoIsVisible();
        await this.expectVisible(locators.loginAccountHeading(this.page));
        await this.expectVisible(locators.newUserSignUpHeading(this.page));
    }

    async navigateToSignUpPage(url: string) {
        await this.goToUrl(url);
    }

    async verifySignUpUrl(expectedUrl: string) {
        await this.expectUrl(expectedUrl);
    }

    async verifyAccountInfoHeadingTestIsVisible() {
        const accountInfo = locators.infoHeading(this.page);
        await this.expectVisible(accountInfo);
        await this.expectHasText(accountInfo, 'ENTER ACCOUNT INFORMATION');
    }

    async verifyAddressInfoHeadingTextIsVisible() {
        const addressInfo = locators.addressHeading(this.page);
        await this.expectVisible(addressInfo);
        await this.expectHasText(addressInfo, 'ADDRESS INFORMATION');
    }

    async verifyLoginToYourAccountHeadingIsVisible() {
        await this.expectVisible(locators.loginAccountHeading(this.page));
    }

    async enterCredentials() {
        await this.fill(locators.loginEmailInput(this.page), testData.credential.email);
        await this.fill(locators.loginPasswordInput(this.page), testData.credential.password);
    }

    async clickLoginButton() {
        await this.click(locators.loginButton(this.page));
    }

    async clickCreateAccountButton() {
        await this.click(locators.createAccountButton(this.page));
    }

    //@step('Fill Sign Up Form')
    async fillSignUpForm() {
        if (testData.signUp.title === 'Mr') {
            await this.selectRadio(locators.MRTitle(this.page));
        } else if (testData.signUp.title === 'Mrs') {
            await this.selectRadio(locators.MSTitle(this.page));
        }
        await this.expectEquals(locators.nameInput(this.page), testData.signUp.name); // Verify name input is pre-filled with the name used during signup
        await this.expectEquals(locators.emailInput(this.page), testData.signUp.email); // Verify email input is pre-filled with the email used during signup
        await this.fill(locators.passwordInput(this.page), testData.signUp.password);
        await this.selectByValue(locators.dateOfBirthDay(this.page), testData.signUp.day);
        await this.selectByValue(locators.dateOfBirthMonth(this.page), testData.signUp.month);
        await this.selectByValue(locators.dateOfBirthYear(this.page), testData.signUp.year);
        await this.fill(locators.firstNameInput(this.page), testData.signUp.firstName);
        await this.fill(locators.lastNameInput(this.page), testData.signUp.lastName);
        await this.fill(locators.companyInput(this.page), testData.signUp.company);
        await this.fill(locators.address1Input(this.page), testData.signUp.address1);
        await this.fill(locators.address2Input(this.page), testData.signUp.address2);
        await this.selectByValue(locators.countrySelect(this.page), testData.signUp.country);
        await this.fill(locators.stateInput(this.page), testData.signUp.state);
        await this.fill(locators.cityInput(this.page), testData.signUp.city);
        await this.fill(locators.zipCodeInput(this.page), testData.signUp.zipcode);
        await this.fill(locators.mobileNumberInput(this.page), testData.signUp.mobileNumber);
    }
}
