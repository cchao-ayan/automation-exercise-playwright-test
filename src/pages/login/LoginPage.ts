import { step } from "../../utilities/step-decorator2";
import { BasePage } from "../base/BasePage";
import { locators, playwrightLocators } from "./LoginPageLocators";
import { locators as headerLocators } from "../common/header/HeaderLocators";

export class LoginPage extends BasePage {
    async navigateToManagePage(url: string){
        await this.goToUrl(url);
    }

    async verifyLoginPageUrl(expectedUrl: string){
        await this.expectUrl(expectedUrl);
    }

    async verifySignUpHeadingIsVisible(){
        await this.expectVisible(playwrightLocators.newUserHeading(this.page));
    }  

    async fillSignUpNameInput(name: string){
        await this.fill(playwrightLocators.newUserNameInput(this.page), name);
    }

    async fillSignUpEmailInput(email: string){
        await this.fill(playwrightLocators.newUserEmailInput(this.page), email);
    }

    async clickSignUpButton(){
        await this.click(playwrightLocators.newUserSignupButton(this.page));
    }
    
    @step("Fill name and email: {name}, {email}")
    async fillNameAndEmail(name: string, email: string){
        await this.fillSignUpNameInput(name);
        await this.fillSignUpEmailInput(email);
    }


}