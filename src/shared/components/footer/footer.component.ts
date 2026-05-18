import { Locator, expect } from '@playwright/test';

export class FooterComponent {
  constructor(private readonly root: Locator) { }

  // ======================
  // Locators
  // ======================
  private readonly subscribeButton = this.root.locator('#subscribe');
  private readonly subscriptionHeading = this.root.getByRole('heading', { name: 'Subscription' });
  private readonly emailInput = this.root.getByRole('textbox', { name: 'Your email address' });
  private readonly subscriptionDescription = this.root.locator('p', {
    hasText: 'Get the most recent updates',
  });
  private readonly successMessage = this.root.locator('.alert-success alert');

  // ======================
  // Business methods
  // ======================
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
    return (await this.subscriptionDescription.textContent()) ?? '';
  }

  async expectSuccessSubscription(): Promise<void> {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toHaveText('You have been successfully subscribed!');
  }
}
