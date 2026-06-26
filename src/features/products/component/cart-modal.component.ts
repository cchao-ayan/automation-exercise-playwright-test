import { Page, expect } from '@playwright/test';

export class CartModalComponent {
    constructor(private readonly page: Page) { }

    // ======================
    // Locators
    // ======================
    private readonly modalContent = this.page.locator('.modal-content');
    private readonly modalHeader = this.modalContent.locator('.modal-header');
    private readonly modalBody = this.modalContent.locator('.modal-body');
    private readonly modalFooter = this.modalContent.locator('.modal-footer');
    private readonly modalIcon = this.modalHeader.locator('.material-icons');
    private readonly modalTitle = this.modalHeader.getByRole('heading', { name: 'Added!', level: 4 });
    private readonly modalText = this.modalBody.getByText('Your product has been added to cart.');
    private readonly viewCartLink = this.modalBody.getByRole('link', { name: 'View Cart' });
    private readonly continueShoppingButton = this.modalFooter.getByRole('button', { name: 'Continue Shopping' });
    // ======================
    // State Methods
    // ======================
      public async assertModalLoaded(): Promise<void> {
        await expect(this.modalContent).toBeVisible();
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