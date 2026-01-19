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

    async verifyLoggedInAsUsername(username: string) {
        const loggedInText = `Logged in as ${username}`;
        await this.expectHasText(locators.loggedInAsLabel(this.page), loggedInText);
    }

    async verifyLoggedInUser() {
        const loggedInUser = await locators.loggedInAsLabel(this.page).innerText() + ' ' + process.env.TEST_FIRST_NAME;
        console.log(loggedInUser);
        await this.expectHasText(locators.loggedInAsLabel(this.page), loggedInUser);
    }
}
