import { BasePage } from '../base/base.page';
import { routes } from '/config/routes';
import { expect, Page } from '@playwright/test';
import { AccountDeletedLocators } from './account-deleted.locators';

export class AccountDeletedPage extends BasePage {
  private readonly locators: AccountDeletedLocators;

  constructor(protected readonly page: Page) {
    super(page);
    this.locators = new AccountDeletedLocators(this.page);
  }

  // ======================
  // State methods
  // ======================
  public async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.accountDeleted}$`));
    await expect(this.locators.accountDeletedHeading).toBeVisible();
    await expect(this.locators.message1).toBeVisible();
    await expect(this.locators.message2).toBeVisible();
  }
  public async clickContinueButton() {
    await this.locators.continueButton.click();
  }
}
