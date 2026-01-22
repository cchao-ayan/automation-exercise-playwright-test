import { Page, expect, Locator } from '@playwright/test';
import { locators } from "./HeaderLocators";
import { CommonPageMethods } from '../../base/CommonPageMethod';

export class Header extends CommonPageMethods {

    constructor(page: Page) {
        super(page);
    }

    /*  Actions */
    async clickSignupLoginLink() {
        await this.click(locators.signUpLogInLink(this.page));
    }

    async clickDeleteAccountLink() {
        await this.click(locators.deleteAccountLink(this.page));
    }

    /*  Verifications */
    async verifyDeleteButtonIsVisible() {
        await this.expectVisible(locators.deleteAccountLink(this.page));
    }

    async verifyDeleteButtonIsNotVisible() {
        await this.expectNotVisible(locators.deleteAccountLink(this.page));
    }

    async verifyLogoIsVisible() {
        await this.expectVisible(locators.logoImage(this.page));
    }

    async verifyLogoutButtonIsVisible() {
        await this.expectVisible(locators.logoutLink(this.page));
    }

    async verifyLogoutButtonIsNotVisible() {
        await this.expectNotVisible(locators.logoutLink(this.page));
    }

    async verifyLoggedInUser() {
        try {
            const loggedInUser = await locators.navBar(this.page).nth(9).innerText();
            await this.expectHasText(loggedInUser, 'Logged in as ' + process.env.TEST_FIRST_NAME);
        } catch (error) {
            console.error('Error verifying logged in user:', error);
        }
    }
}
