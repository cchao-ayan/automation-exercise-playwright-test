import { BasePage } from "../BasePage";
import { locators } from "./LoginPageLocators";

export class LoginPage extends BasePage {
    async navigateToManagePage(url: string){
        await this.goToUrl(url);
    }

    async verifyLoginPageUrl(expectedUrl: string){
        await this.basePageExpectToHaveURL(expectedUrl);
    }

    async verifyLogoIsVisible(){
        await this.basePageExpectToBeVisible(locators.logoImage);
    }

    async verifySignUpHeadingIsVisible(){
        await this.basePageExpectToBeVisible(locators.loginHeading);
    }  

    async fillSignUpNameInput(name: string){
        await this.basePageFill(locators.loginNameInput, name);
    }

    async fillSignUpEmailInput(email: string){
        await this.basePageFill(locators.loginEmailInput, email);
    }

    async clickSignUpButton(){
        await this.basePageClick(locators.loginButton);
    }

    async fillNameAndEmail(name: string, email: string){
        await this.fillSignUpNameInput(name);
        await this.fillSignUpEmailInput(email);
    }


}