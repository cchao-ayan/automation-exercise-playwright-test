import {BasePage} from "../base/BasePage";
import {expect} from "@playwright/test";
import { locators, playwrightLocators as homepageLocators} from "./HomePageLocators";
import { playwrightLocators as headerLocators } from "../common/header/HeaderLocators";

export class HomePage extends BasePage {

    async navigateToHomePage(url: string){
        await this.goToUrl(url);
    }

    async verifyHomePageUrl(expectedUrl: string){
        await this.basePageExpectToHaveURL(expectedUrl);
    }
    
}