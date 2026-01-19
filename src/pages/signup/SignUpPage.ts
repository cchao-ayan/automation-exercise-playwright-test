import { BasePage } from "../base/BasePage";
import { locators } from "./SignUpPageLocators";
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
        const accountInfo = locators.signUpInfoHeading(this.page);
        await this.expectVisible(accountInfo);
        await this.expectHasText(accountInfo, 'ENTER ACCOUNT INFORMATION');
    }

    async verifyAddressInfoHeadingTextIsVisible() {
        const addressInfo = locators.signUpAddressHeading(this.page);
        await this.expectVisible(addressInfo);
        await this.expectHasText(addressInfo, 'ADDRESS INFORMATION');    
    }

    async clickCreateAccountButton(){
        await this.click(locators.signUpCreateAccountButton(this.page));
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
            await this.selectRadio(locators.signUpMRTitle(this.page));
        } else if (data.title === 'Mrs') {
            await this.selectRadio(locators.signUpMSTitle(this.page));
        }
        await this.expectEquals(locators.signUpNameInput(this.page), data.name); // Verify name input is pre-filled with the name used during signup
        await this.expectEquals(locators.signUpEmailInput(this.page), data.email); // Verify email input is pre-filled with the email used during signup
        await this.fill(locators.signUpPasswordInput(this.page), data.password);
        await this.selectByValue(locators.signUpDateOfBirthDay(this.page), data.day);
        await this.selectByValue(locators.signUpDateOfBirthMonth(this.page), data.month);
        await this.selectByValue(locators.signUpDateOfBirthYear(this.page), data.year);
        await this.fill(locators.signUpFirstNameInput(this.page), data.firstName);
        await this.fill(locators.signUpLastNameInput(this.page), data.lastName);
        await this.fill(locators.signUpCompanyInput(this.page), data.company);
        await this.fill(locators.signUpAddress1Input(this.page), data.address1);
        await this.fill(locators.signUpAddress2Input(this.page), data.address2);
        await this.selectByValue(locators.signUpCountrySelect(this.page), data.country);
        await this.fill(locators.signUpStateInput(this.page), data.state);
        await this.fill(locators.signUpCityInput(this.page), data.city);
        await this.fill(locators.signUpZipCodeInput(this.page), data.zipcode);
        await this.fill(locators.signUpMobileNumberInput(this.page), data.mobileNumber);
    }
}
