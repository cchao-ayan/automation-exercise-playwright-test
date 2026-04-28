import { Locator, expect } from '@playwright/test';
import { FooterLocators } from './footer.locators';

export class FooterComponent {

  private readonly locator: FooterLocators;

  constructor(private readonly root: Locator) {
    this.locator = new FooterLocators(root);
  }
  // ======================
  // Business methods
  // ======================

  public async subscribe(email: string): Promise<void> {
    await this.locator.emailInput.fill(email);
    await this.locator.subscribeButton.click();
  }

  // ======================
  // State methods
  // ======================

  public async isSubscriptionHeadingVisible(): Promise<boolean> {
    return await this.locator.subscriptionHeading.isVisible(); 
  }

  public async getSubscriptionDescriptionText(): Promise<string> {
    return await this.locator.subscriptionDescription.textContent() ?? '';
  }

  async expectSuccessSubscription(): Promise<void> {
    await expect(this.locator.successMessage).toBeVisible();
    await expect(this.locator.successMessage).toHaveText('You have been successfully subscribed!');
  }

}
