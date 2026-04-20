import { BasePage } from '../../base/base.page';
import { expect } from '@playwright/test';
import { ROUTES } from '../../constant/routes.const';

export class TestCasePage extends BasePage {
  // ======================
  // Locators - uses different approach (not using locator factory)
  // ======================

  private get testCaseHeading() { return this.page.getByRole('heading', { name: 'Test Cases', level: 2 }) };
  private get feedbackHeading() { return this.page.getByRole('heading', { name: 'Feedback For Us' }) };

  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.SIGNUP_LOGIN}$`));
    await expect(this.testCaseHeading).toBeVisible();
    await expect(this.feedbackHeading).toBeVisible();
  }
}
