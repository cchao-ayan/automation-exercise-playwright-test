import { BasePage } from '../../base/base.page';
import { expect, Page } from '@playwright/test';
import { ROUTES } from '../../constant/routes.const';
import { ACCOUNT_DELETED } from './account-deleted.locators';

export class AccountDeletedPage extends BasePage {
  private readonly accountDeletedLocator;

  constructor(protected readonly page: Page) {
    super(page);
    this.accountDeletedLocator = ACCOUNT_DELETED(this.page); 
  }

  // ======================
  // State methods
  // ======================
  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.ACCOUNT_DELETED}$`));
    await expect(this.accountDeletedLocator.accountDeletedHeading).toBeVisible();
    await expect(this.accountDeletedLocator.text1).toBeVisible();
    await expect(this.accountDeletedLocator.text2).toBeVisible();
  }
  private async clickContinueButton() {
    await this.accountDeletedLocator.continueButton.click();
  }
}
