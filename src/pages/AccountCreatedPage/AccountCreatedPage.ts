import { BasePage } from "../BasePage";
import { expect } from "@playwright/test";

export class AccountCreatedPage extends BasePage {
    async verifyURL(expectedUrl: string){
        await this.basePageExpectToHaveURL(expectedUrl);
    }

}