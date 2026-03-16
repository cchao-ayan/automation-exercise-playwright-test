import { Locator, expect } from '@playwright/test';
import { LocatorFactory } from '@/base/locator';

export class FooterComponent {
  private readonly locatorFactory: LocatorFactory;

  constructor(private readonly root: Locator) { 
    this.locatorFactory = new LocatorFactory(root);
  }

  // ======================
  // Locators - uses different approach (not using locator factory)
  // ======================
  private get subscribeButton() { return this.root.locator('#subscribe') };
  private get subscriptionHeading() { return this.root.getByRole('heading', { name: 'Subscription' }) };
  private get emailInput() { return this.root.getByRole('textbox', { name: 'Your email address' }) };
  private get subscriptionDescription() { return this.root.locator('p', { hasText: 'Get the most recent updates' }) };
  private get successMessage() { return this.root.locator('.alert-success alert') };

  // ======================
  // Business methods
  // ======================

  //Fill in the subscription email and click subscribe
  public async subscribe(email: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.subscribeButton.click();
  }

  // ======================
  // State methods
  // ======================

  public async isSubscriptionHeadingVisible(): Promise<boolean> {
    return await this.subscriptionHeading.isVisible();
  }

  public async getSubscriptionDescriptionText(): Promise<string> {
    return await this.subscriptionDescription.textContent() ?? '';
  }

  async expectSucessSubscription(): Promise<void> {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toHaveText('You have been successfully subscribed!');
  }

}
