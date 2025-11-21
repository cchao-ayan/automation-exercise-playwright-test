import { BasePage } from "../BasePage";
import { expect } from "@playwright/test";

export class LoginPage extends BasePage {
    async navigateToManagePage(url: string){
        await this.goToUrl(url);
    }
}