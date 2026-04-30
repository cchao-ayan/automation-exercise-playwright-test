import { BasePage } from '../base/base.page';
import { expect, Page } from '@playwright/test';
import { routes } from '/config/routes';
import { HomeLocators } from './home.locators';

export class HomePage extends BasePage {
  private readonly locators: HomeLocators;

  constructor(protected readonly page: Page) {
    super(page);
    this.locators = new HomeLocators(this.page);
  }

  public async navigateToHomePage(): Promise<void> {
    await this.navigate(routes.home);
  }

  // ======================
  // State methods
  // ======================
  public async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.home}$`));
    await expect(this.locators.slider).toBeVisible();
    await expect(this.locators.recommendedListHeading).toBeVisible();
    await expect(this.locators.categoryHeading).toBeVisible();
    await expect(this.locators.featuresItemsHeadin).toBeVisible();
    await expect(this.locators.brandsHeading).toBeVisible();
  }
}
