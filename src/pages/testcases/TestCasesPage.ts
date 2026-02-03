import { BasePage } from '../base/BasePage';
import { locators } from './TestCasesPageLocators';

export class TestCasePage extends BasePage {
  async ready() {
    await this.navigateToTestCasePage('https://automationexercise.com/test_cases');
    await this.header.verifyLogoIsVisible();
    await this.verifyTestCaseHeadingIsVisible();
    await this.verifyFeedbackHeadingIsVisible();
  }
  async navigateToTestCasePage(url: string) {
    await this.goToUrl(url);
  }
  async verifyTestCasePageUrl(expectedUrl: string) {
    await this.expectUrl(expectedUrl);
  }
  async verifyTestCaseHeadingIsVisible() {
    await this.expectVisible(locators.testCaseHeading(this.page));
  }
  async verifyFeedbackHeadingIsVisible() {
    await this.expectVisible(locators.feedbackHeading(this.page));
  }
}
