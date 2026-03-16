import { BasePage } from '../../pages';
import { expect } from '@playwright/test';
import { ROUTES } from '@/constant/routes.const';

export class AccountDeletedPage extends BasePage {
  // ======================
  // Locators
  // ======================  
  private get accountDeletedHeading() { return this.page.locator('b:has-text("Account Deleted!")') };
  private get text1() { return this.page.locator('p:has-text("Your account has been permanently deleted!")') };
  private get text2() { return this.page.locator('p:has-text("You can create new account to take advantage")') };
  private get continueButton() { return this.page.getByTestId('continue-button') };

  // ======================
  // State methods
  // ======================
  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.ACCOUNT_DELETED}$`));
    await expect(this.accountDeletedHeading).toBeVisible();
    await expect(this.text1).toBeVisible();
    await expect(this.text2).toBeVisible();
  }
  async clickContinueButton() {
    await this.continueButton.click();
  }
}
