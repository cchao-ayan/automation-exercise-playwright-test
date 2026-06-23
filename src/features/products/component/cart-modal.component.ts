import { Page, expect } from '@playwright/test';

export class CartModalComponent {
    constructor(private readonly page: Page) { }

    // ======================
    // Locators
    // ======================
    private readonly modalIcon = this.page.getByRole('link', { name: ' Products' });
    private readonly modalTitle = this.page.getByRole('heading', { name: 'Added!', level: 4 });
    private readonly modalText = this.page.getByText('Your product has been added to cart.');
    private readonly viewCartLink = this.page.getByRole('link', { name: 'View Cart' });
    private readonly continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping' });
    // ======================
    // State Methods
    // ======================
      public async assertModalLoaded(): Promise<void> {
        await expect(this.modalIcon).toBeVisible();
        await expect(this.modalTitle).toBeVisible();
        await expect(this.modalText).toBeVisible();
        await expect(this.viewCartLink).toBeVisible();
        await expect(this.continueShoppingButton).toBeVisible();
      }
      public async clickContinueShopping(): Promise<void> {
        await this.continueShoppingButton.click();
      }
      public async verifyModalAndContinueShopping(): Promise<void> {
        await this.assertModalLoaded();
        await this.continueShoppingButton.click();
      }
}