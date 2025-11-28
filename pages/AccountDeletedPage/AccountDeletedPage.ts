import { BasePage } from "../BasePage";
import { expect } from "@playwright/test";

export class AccountDeletedPage extends BasePage {
    async verifyURL(expectedUrl: string){
        await this.basePageExpectToHaveURL(expectedUrl);
    }
    
}