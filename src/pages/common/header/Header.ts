import {Page, expect, Locator} from '@playwright/test';
import { playwrightLocators as headerLocators } from "./HeaderLocators";
import { CommonPageMethods } from '../base-component/CommonPageMethod';

export class Header extends CommonPageMethods {

    constructor(page: Page) {
        super(page);
    }

    async verifyLogoIsVisible(){
        await expect(headerLocators.logoImage(this.page)).toBeVisible();
    }

    async clickSignupLoginLink(){
        await headerLocators.signUpLogInLink(this.page).click();
    }   
}
