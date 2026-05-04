import { BasePage } from '../base/base.page';
import { routes } from '/config/routes';
import { expect, Page } from '@playwright/test';
import { AccountCreatedLocators } from './account-created.locators';

export class AccountCreatedPage extends BasePage {
  private readonly locators: AccountCreatedLocators;

  constructor(protected readonly page: Page) {
    super(page);
    this.locators = new AccountCreatedLocators(this.page);
  }

  // ======================
  // State methods
  // ======================
  public async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.accountCreated}$`));
    await expect(this.locators.accountCreatedHeading).toBeVisible();
    await expect(this.locators.message1).toBeVisible();
    await expect(this.locators.message2).toBeVisible();
  }

  public async clickContinueButton() {
    await this.locators.continueButton.click();
  }
}
