import {BasePage} from "../BasePage";
import {expect} from "@playwright/test";

export class HomePage extends BasePage {

    async navigateToHomePage(url: string){
        await this.goToUrl(url);
    }

    async verifyHomePageUrl(expectedUrl: string){
        await this.basePageExpectToHaveURL(expectedUrl);
    }
    
    async verifyLogoIsVisible(){
        await this.basePageExpectToBeVisible(this.page.getByRole('img', { name: 'Website for automation practice' }));
    }
}