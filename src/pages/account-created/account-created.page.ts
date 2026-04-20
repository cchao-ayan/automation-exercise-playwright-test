import { BasePage } from '../../base/base.page';
import { ROUTES } from '../../constant/routes.const';
import { expect, Page } from '@playwright/test';
import { ACCOUNT_CREATED } from './account-created.locators';

export class AccountCreatedPage extends BasePage {

  private readonly accountCreatedLocator;

  constructor(protected readonly page: Page) {
    super(page);
    this.accountCreatedLocator = ACCOUNT_CREATED(this.page);
  }
  
    // ======================
    // State methods
    // ======================
    public async assertPageLoaded(): Promise<void> {
      await expect(this.page).toHaveURL(new RegExp(`${ROUTES.ACCOUNT_CREATED}$`));
      await expect(this.accountCreatedLocator.accountCreatedHeading).toBeVisible();
      await expect(this.accountCreatedLocator.text1).toBeVisible();
      await expect(this.accountCreatedLocator.text2).toBeVisible();
    }

  public async clickContinueButton() {
    await this.accountCreatedLocator.continueButton.click();
  }
}
