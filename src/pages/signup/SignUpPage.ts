import { BasePage } from "../base/BasePage";
import { expect } from "@playwright/test";
import { locators, playwrightLocators } from "./SignUpPageLocators";
import { step } from "../../utilities/step-decorator2";

export class SignUpPage extends BasePage {
    async verifyURL(expectedUrl: string) {
        await this.basePageExpectToHaveURL(expectedUrl);
    }

    async verifyLogoIsVisible() {
        await this.basePageExpectToBeVisible(locators.logoImage);
    }

    async verifyAccountInfoHeadingTestIsVisible() {
        const accountInfo = locators.signUpInfoHeading;
        await this.basePageExpectToBeVisible(accountInfo);
        await this.basePageExpectToHaveText(accountInfo, 'ENTER ACCOUNT INFORMATION');
    }

    async verifyAddressInfoHeadingTextIsVisible() {
        const addressInfo = locators.signUpAddressHeading;
        await this.basePageExpectToBeVisible(addressInfo);
        await this.basePageExpectToHaveText(addressInfo, 'ADDRESS INFORMATION');    
    }

    async clickCreateAccountButton(){
        await this.basePageClick(playwrightLocators.signUpCreateAccountButton(this.page));
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
            await this.basePageRadioButtonSelect(playwrightLocators.signUpMRTitle(this.page));
        } else if (data.title === 'Mrs') {
            await this.basePageRadioButtonSelect(playwrightLocators.signUpMSTitle(this.page));
        }
        await this.basePageFill(playwrightLocators.signUpNameInput(this.page), data.name);
        await this.basePageFill(playwrightLocators.signUpEmailInput(this.page), data.email);
        await this.basePageFill(playwrightLocators.signUpPasswordInput(this.page), data.password);
        await this.basePageSelectFromDropdownByValue(locators.signUpDateOfBirthDay, data.day);
        await this.basePageSelectFromDropdownByValue(locators.signUpDateOfBirthMonth, data.month);
        await this.basePageSelectFromDropdownByValue(locators.signUpDateOfBirthYear, data.year);
        await this.basePageFill(playwrightLocators.signUpFirstNameInput(this.page), data.firstName);
        await this.basePageFill(playwrightLocators.signUpLastNameInput(this.page), data.lastName);
        await this.basePageFill(playwrightLocators.signUpCompanyInput(this.page), data.company);
        await this.basePageFill(playwrightLocators.signUpAddress1Input(this.page), data.address1);
        await this.basePageFill(playwrightLocators.signUpAddress2Input(this.page), data.address2);
        await this.basePageSelectFromDropdownByValue(playwrightLocators.signUpCountrySelect(this.page), data.country);
        await this.basePageFill(playwrightLocators.signUpStateInput(this.page), data.state);
        await this.basePageFill(playwrightLocators.signUpCityInput(this.page), data.city);
        await this.basePageFill(locators.signUpZipCodeInput, data.zipcode);
        await this.basePageFill(playwrightLocators.signUpMobileNumberInput(this.page), data.mobileNumber);
    }
}
