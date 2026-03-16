import { BasePage } from '..';
import { Locator, expect } from '@playwright/test';
import { ROUTES } from '@/constant/routes.const';

export class HomePage extends BasePage {
  // ======================
  // Locators
  // ======================  
  private heading(name: string): Locator { return this.page.getByRole('heading', { name }); }

  private get slider() { return this.page.locator('#slider') };

  // ======================
  // State methods
  // ======================
  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.HOME}$`));
    await expect(this.slider).toBeVisible();
    await expect(this.heading('Recommended Items')).toBeVisible();
    await expect(this.heading('Category')).toBeVisible();
    await expect(this.heading('Features Items')).toBeVisible();
    await expect(this.heading('Brands')).toBeVisible();
  }
}
