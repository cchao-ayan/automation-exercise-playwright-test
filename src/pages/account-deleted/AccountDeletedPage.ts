import { BasePage } from "../base/BasePage";
import { locators, playwrightLocators } from "./AccountDeletedPageLocators";

export class AccountDeletedPage extends BasePage {
    async verifyAccountDeletedPageURL(expectedUrl: string){
        await this.expectUrl(expectedUrl);
    }

        async verifyHeadingisVisible(){
            const headingLocator = this.toLocator(locators.accountDeletedHeading);
            await this.expectVisible(headingLocator);
            await this.expectHasText(headingLocator, 'Account Deleted!');
        }
    
        async verifyText1isVisible(){
            const text1Locator = this.toLocator(locators.text1);
            await this.expectVisible(text1Locator);
            await this.expectHasText(text1Locator, 'Your account has been permanently deleted!');
        }
        
        async verifyText2isVisible(){
            const text2Locator = this.toLocator(locators.text2);
            await this.expectVisible(text2Locator);
            await this.expectHasText(text2Locator, 'You can create new account to take advantage of member privileges to enhance your online shopping experience with us.');
        }
    
        async clickContinueButton(){
            await this.click(playwrightLocators.accountDeletedContinueButton(this.page));
        }
}