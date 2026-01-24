import { BasePage } from "../base/BasePage";
import { locators } from "./AccountCreatedPageLocators";

export class AccountCreatedPage extends BasePage {
    async verifyPageUrl(expectedUrl: string) {
        await this.expectUrl(expectedUrl);
    }

    async verifyHeadingisVisible() {
        const headingLocator = this.toLocator(locators.accountCreatedHeading(this.page));
        await this.expectVisible(headingLocator);
        await this.expectHasText(headingLocator, 'Account Created!');
    }

    async verifyText1isVisible() {
        const text1Locator = this.toLocator(locators.text1(this.page));
        await this.expectVisible(text1Locator);
        await this.expectHasText(text1Locator, 'Congratulations! Your new account has been successfully created!');
    }

    async verifyText2isVisible() {
        const text2Locator = this.toLocator(locators.text2(this.page));
        await this.expectVisible(text2Locator);
        await this.expectHasText(text2Locator, 'You can now take advantage of member privileges to enhance your online shopping experience with us.');
    }

    async verifyAccountIscreated() {
        await this.verifyPageUrl('https://automationexercise.com/account_created');
        await this.header.verifyLogoIsVisible();
        await this.verifyHeadingisVisible();
        await this.verifyText1isVisible();
        await this.verifyText2isVisible();
        await this.clickContinueButton();
    }
    async clickContinueButton() {
        await this.click(locators.continueButton(this.page));
    }
}