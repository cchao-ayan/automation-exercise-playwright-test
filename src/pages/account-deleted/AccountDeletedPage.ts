import { BasePage } from '../base/BasePage';
import { locators } from './AccountDeletedPageLocators';

export class AccountDeletedPage extends BasePage {
  async verifyAccountDeletedPageURL(expectedUrl: string) {
    await this.expectUrl(expectedUrl);
  }

  async verifyHeadingisVisible() {
    const headingLocator = this.toLocator(locators.accountDeletedHeading);
    await this.expectVisible(headingLocator);
    await this.expectHaveText(headingLocator, 'Account Deleted!');
  }

  async verifyText1isVisible() {
    const text1Locator = this.toLocator(locators.text1);
    await this.expectVisible(text1Locator);
    await this.expectHaveText(text1Locator, 'Your account has been permanently deleted!');
  }

  async verifyText2isVisible() {
    const text2Locator = this.toLocator(locators.text2);
    await this.expectVisible(text2Locator);
    await this.expectHaveText(
      text2Locator,
      'You can create new account to take advantage of member privileges to enhance your online shopping experience with us.',
    );
  }

  async clickContinueButton() {
    await this.click(locators.continueButton(this.page));
  }

  async verifyAccountIsDeleted() {
    await this.verifyAccountDeletedPageURL('https://automationexercise.com/delete_account');
    await this.header.verifyLogoIsVisible();
    await this.verifyHeadingisVisible();
    await this.verifyText1isVisible();
    await this.verifyText2isVisible();
    await this.clickContinueButton();
  }
}
