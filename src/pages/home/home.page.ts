import { BasePage } from '../../base/base.page';
import { expect, Page } from '@playwright/test';
import { ROUTES } from '../../constant/routes.const';
import { HOME } from './home.locators';

export class HomePage extends BasePage {
  private readonly homeLocator;

  constructor(protected readonly page: Page) {
    super(page);
    this.homeLocator = HOME(this.page);
  }

  public async navigateToHomePage(): Promise<void> {
    await this.navigate(ROUTES.HOME);
  }

  // ======================
  // State methods
  // ======================
  public async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.HOME}$`));
    await expect(this.homeLocator.slider).toBeVisible();
    await expect(this.homeLocator.heading('Recommended Items')).toBeVisible();
    await expect(this.homeLocator.heading('Category')).toBeVisible();
    await expect(this.homeLocator.heading('Features Items')).toBeVisible();
    await expect(this.homeLocator.heading('Brands')).toBeVisible();
  }
}
