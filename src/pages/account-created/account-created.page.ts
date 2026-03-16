import { BasePage } from '@/base/base.page';
import { ROUTES } from '@/constant/routes.const';
import { expect } from '@playwright/test';

export class AccountCreatedPage extends BasePage {
    // ======================
    // Locators
    // ======================  
     private get accountCreatedHeading() { return this.page.getByRole('heading', { name: 'Account Created!' })};
     private get text1() { return this.page.getByText('Congratulations! Your new account has been successfully created!')};
     private get text2() { return this.page.getByText('You can now take advantage of member privileges to enhance your online shopping experience with us.',)};
     private get continueButton() { return this.page.getByTestId('continue-button')};
  
    // ======================
    // State methods
    // ======================
    protected async assertPageLoaded(): Promise<void> {
      await expect(this.page).toHaveURL(new RegExp(`${ROUTES.ACCOUNT_CREATED}$`));
      await expect(this.accountCreatedHeading).toBeVisible();
      await expect(this.text1).toBeVisible();
      await expect(this.text2).toBeVisible();
    }

  async clickContinueButton() {
    await this.continueButton.click();
  }
}
