import { BasePage } from '/base/base.page';
import { expect, Page } from '@playwright/test';
import { routes } from '/config/routes';
import { TestCaseLocators } from './test-case.locators';

export class TestCasePage extends BasePage {
  private readonly locators: TestCaseLocators;
  constructor(protected readonly page: Page) {
    super(page);
    this.locators = new TestCaseLocators(this.page);
  }

  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.testCases}$`));
    await expect(this.locators.testCaseHeading).toBeVisible();
    await expect(this.locators.feedbackHeading).toBeVisible();
  }
}
