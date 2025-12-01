import {BasePage} from "../base/BasePage";
import {expect} from "@playwright/test";
import { locators, playwrightLocators } from "./HomePageLocators";

export class HomePage extends BasePage {

    async navigateToHomePage(url: string){
        await this.goToUrl(url);
    }

    async verifyHomePageUrl(expectedUrl: string){
        await this.basePageExpectToHaveURL(expectedUrl);
    }
    
    async verifyLogoIsVisible(){
        await this.basePageExpectToBeVisible(locators.logoImage);
    }

    async clickSignupLoginLink(){
        await this.basePageClick(playwrightLocators.signupLoginLink(this.page));
    }   
}