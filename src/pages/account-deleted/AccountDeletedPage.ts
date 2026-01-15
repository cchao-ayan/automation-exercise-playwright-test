import { BasePage } from "../base/BasePage";
import { expect } from "@playwright/test";

export class AccountDeletedPage extends BasePage {
    async verifyURL(expectedUrl: string){
        await this.expectUrl(expectedUrl);
    }
    
}