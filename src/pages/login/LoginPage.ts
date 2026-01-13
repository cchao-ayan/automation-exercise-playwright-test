import { step } from "../../utilities/step-decorator2";
import { BasePage } from "../base/BasePage";
import { locators } from "./LoginPageLocators";
import { playwrightLocators as headerLocators } from "../common/header/HeaderLocators";

export class LoginPage extends BasePage {
    async navigateToManagePage(url: string){
        await this.goToUrl(url);
    }

    async verifyLoginPageUrl(expectedUrl: string){
        await this.basePageExpectToHaveURL(expectedUrl);
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
    
    @step("Fill name and email: {name}, {email}")
    async fillNameAndEmail(name: string, email: string){
        await this.fillSignUpNameInput(name);
        await this.fillSignUpEmailInput(email);
    }


}