import { Page, expect, Locator } from '@playwright/test';
import { locators } from "./HeaderLocators";
import { CommonPageMethods } from '../../base/CommonPageMethod';
import { testCredentials } from "../../../config/TestCredentials";

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

    async clickLogoutLink() {
        await this.click(locators.logoutLink(this.page));
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

    async verifyLoggedInUserTextIsNotVisible() {
        await this.expectNotVisible(locators.loggedInText(this.page));
    }

    async verifyLoggedInUser() {
        try {
            const loggedInUser = locators.loggedInText(this.page);
            console.log('Logged in user text: ', loggedInUser);
            await this.expectVisible(loggedInUser);
            await this.expectHaveText(loggedInUser, 'Logged in as ' + testCredentials.name);
        } catch (error) {
            console.error('Error verifying logged in user: ', error);
        }
    }
}
