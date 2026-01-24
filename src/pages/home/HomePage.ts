import { BasePage } from "../base/BasePage";
import { locators } from "./HomePageLocators";

export class HomePage extends BasePage {

    async navigateToHomePage(url: string,) {
        await this.goToUrl(url);
    }

    async verifyHomePageUrl(expectedUrl: string) {
        await this.expectUrl(expectedUrl);
    }

    async verifySliderIsVisible() {
        await this.expectVisible(locators.sliderCarousel(this.page));
    }

    async ready() {
        await this.expectUrl('https://automationexercise.com/');
        await this.header.verifyLogoIsVisible();
    }

    async verifyThatUserIsLoggedIn() {
        await this.verifyHomePageUrl('https://automationexercise.com/');
        await this.header.verifyLogoIsVisible();
        await this.header.verifyDeleteButtonIsVisible();
        await this.header.verifyLogoutButtonIsVisible();
        await this.header.verifyLoggedInUser();
    }

    async verifyThatUserIsLoggedOut() {
        await this.verifyHomePageUrl('https://automationexercise.com/');
        await this.header.verifyLogoIsVisible();
        await this.header.verifyDeleteButtonIsNotVisible();
        await this.header.verifyLogoutButtonIsNotVisible();
    }
}