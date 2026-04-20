import { Locator, expect } from '@playwright/test';
import { FOOTER_LOCATORS } from './footer.locators';

export class FooterComponent {

  private readonly footerLocator;

  constructor(private readonly root: Locator) {
    this.footerLocator = FOOTER_LOCATORS(root);
  }
  // ======================
  // Business methods
  // ======================

  public async subscribe(email: string): Promise<void> {
    await this.footerLocator.emailInput.fill(email);
    await this.footerLocator.subscribeButton.click();
  }

  // ======================
  // State methods
  // ======================

  public async isSubscriptionHeadingVisible(): Promise<boolean> {
    return await this.footerLocator.subscriptionHeading.isVisible(); 
  }

  public async getSubscriptionDescriptionText(): Promise<string> {
    return await this.footerLocator.subscriptionDescription.textContent() ?? '';
  }

  async expectSuccessSubscription(): Promise<void> {
    await expect(this.footerLocator.successMessage).toBeVisible();
    await expect(this.footerLocator.successMessage).toHaveText('You have been successfully subscribed!');
  }

}
