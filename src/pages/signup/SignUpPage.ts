import { BasePage } from "../base/BasePage";
import { locators, playwrightLocators } from "./SignUpPageLocators";
import { step } from "../../utilities/step-decorator2";

export class SignUpPage extends BasePage {

    async navigateToSignUpPage(url: string) {
        await this.goToUrl(url);
    }

    async verifySignUpUrl(expectedUrl: string) {
        await this.expectUrl(expectedUrl);
        await this.ready();
    }

    async verifyAccountInfoHeadingTestIsVisible() {
        const accountInfo = locators.signUpInfoHeading;
        await this.expectVisible(accountInfo);
        await this.expectHasText(accountInfo, 'ENTER ACCOUNT INFORMATION');
    }

    async verifyAddressInfoHeadingTextIsVisible() {
        const addressInfo = locators.signUpAddressHeading;
        await this.expectVisible(addressInfo);
        await this.expectHasText(addressInfo, 'ADDRESS INFORMATION');    
    }

    async clickCreateAccountButton(){
        await this.click(playwrightLocators.signUpCreateAccountButton(this.page));
    }

    @step('Fill Sign Up Form')
    async fillSignUpForm(data: {
        title: string,
        name: string
        email: string,
        password: string,
        day: string,
        month: string,
        year: string,
        firstName: string,
        lastName: string,
        company: string,
        address1: string,
        address2: string,
        country: string,
        state: string,
        city: string,
        zipcode: string,
        mobileNumber: string
    }) {
        if (data.title === 'Mr') {
            await this.selectRadio(playwrightLocators.signUpMRTitle(this.page));
        } else if (data.title === 'Mrs') {
            await this.selectRadio(playwrightLocators.signUpMSTitle(this.page));
        }
        await this.expectEquals(playwrightLocators.signUpNameInput(this.page), data.name); // Verify name input is pre-filled with the name used during signup
        await this.expectEquals(playwrightLocators.signUpEmailInput(this.page), data.email); // Verify email input is pre-filled with the email used during signup
        await this.fill(playwrightLocators.signUpPasswordInput(this.page), data.password);
        await this.selectByValue(locators.signUpDateOfBirthDay, data.day);
        await this.selectByValue(locators.signUpDateOfBirthMonth, data.month);
        await this.selectByValue(locators.signUpDateOfBirthYear, data.year);
        await this.fill(playwrightLocators.signUpFirstNameInput(this.page), data.firstName);
        await this.fill(playwrightLocators.signUpLastNameInput(this.page), data.lastName);
        await this.fill(playwrightLocators.signUpCompanyInput(this.page), data.company);
        await this.fill(playwrightLocators.signUpAddress1Input(this.page), data.address1);
        await this.fill(playwrightLocators.signUpAddress2Input(this.page), data.address2);
        await this.selectByValue(playwrightLocators.signUpCountrySelect(this.page), data.country);
        await this.fill(playwrightLocators.signUpStateInput(this.page), data.state);
        await this.fill(playwrightLocators.signUpCityInput(this.page), data.city);
        await this.fill(locators.signUpZipCodeInput, data.zipcode);
        await this.fill(playwrightLocators.signUpMobileNumberInput(this.page), data.mobileNumber);
    }
}
