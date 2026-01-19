import { BasePage } from "../base/BasePage";
import { locators, playwrightLocators } from "./AccountCreatedPageLocators";

export class AccountCreatedPage extends BasePage {
    async verifyPageUrl(expectedUrl: string){
        await this.expectUrl(expectedUrl);
    }

    async verifyHeadingisVisible(){
        const headingLocator = this.toLocator(locators.accountCreatedHeading);
        await this.expectVisible(headingLocator);
        await this.expectHasText(headingLocator, 'Account Created!');
    }

    async verifyText1isVisible(){
        const text1Locator = this.toLocator(locators.text1);
        await this.expectVisible(text1Locator);
        await this.expectHasText(text1Locator, 'Congratulations! Your new account has been successfully created!');
    }

    async verifyText2isVisible(){
        const text2Locator = this.toLocator(locators.text2);
        await this.expectVisible(text2Locator);
        await this.expectHasText(text2Locator, 'You can now take advantage of member privileges to enhance your online shopping experience with us.');
    }

    async clickContinueButton(){
        await this.click(playwrightLocators.accountCreatedContinueButton(this.page));
    }
}