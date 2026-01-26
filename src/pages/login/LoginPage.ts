import { step } from "../../utilities/step-decorator2";
import { BasePage } from "../base/BasePage";
import { locators } from "./LoginPageLocators";

export class LoginPage extends BasePage {

    async ready(){
        await this.verifyLoginPageUrl('https://automationexercise.com/login');
        await this.header.verifyLogoIsVisible();
        await this.verifySignUpHeadingIsVisible();
        await this.verifyLoginHeadingIsVisible();
    }
    async navigateToManagePage(url: string) {
        await this.goToUrl(url);
    }

    async verifyLoginPageUrl(expectedUrl: string) {
        await this.expectUrl(expectedUrl);
    }

    async verifySignUpHeadingIsVisible() {
        await this.expectVisible(locators.newUserHeading(this.page));
    }

    async verifyLoginHeadingIsVisible() {
        await this.expectVisible(locators.logInHeading(this.page));
    }

    async fillSignUpNameInput(name: string) {
        await this.fill(locators.newUserNameInput(this.page), name);
    }

    async fillSignUpEmailInput(email: string) {
        await this.fill(locators.newUserEmailInput(this.page), email);
    }

    async clickSignUpButton() {
        await this.click(locators.newUserSignupButton(this.page));
    }

    async fillNameAndEmail(name: string, email: string) {
        await this.fillSignUpNameInput(name);
        await this.fillSignUpEmailInput(email);
    }


}