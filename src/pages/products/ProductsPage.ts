import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { locators } from './ProductsPageLocators';
import data from '../../test-data/ProductsTestData.json';
import { compareByKey, pickFields, Logger } from '../../utilities/util.index';
import { ProductCardDTO } from '../../dto/ProductCard.dto';

export class ProductsPage extends BasePage {
  // ---------- Helpers ----------
  productAt(index: number): Locator {
    return locators.featuredItems(this.page).nth(index);
  }

  private async readCardDetailsFromRoot(root: Locator): Promise<ProductCardDTO> {
    return {
      id: await locators.productID(root).getAttribute('data-product-id'),
      name: await locators.productName(root).innerText(),
      price: await locators.productPrice(root).first().innerText()
    };
  }

  // ---------- Methods ----------
  async ready() {
    await this.verifyProductsPageUrl('https://automationexercise.com/products');
    await this.header.verifyLogoIsVisible();
    await this.verifyCategorySectionIsVisible();
    await this.verifyBrandSectionIsVisible();
    //   await this.verifyAllProductsSectionIsVisible();
  }

  async clickPololink() {
    await this.click(locators.poloLink(this.page));
  }
  async navigateToProductsPage(url: string) {
    await this.goToUrl(url);
  }
  async verifyProductsPageUrl(expectedUrl: string) {
    await this.expectUrl(expectedUrl);
  }
  async verifyCategorySectionIsVisible() {
    const categoryHeading = locators.categoryHeading(this.page);
    await this.expectVisible(categoryHeading);
    await this.expectHaveText(categoryHeading, 'Category');
  }
  async verifyBrandSectionIsVisible() {
    const brandHeading = locators.brandHeading(this.page);
    await this.expectVisible(brandHeading);
    await this.expectHaveText(brandHeading, 'Brands');
  }
  async verifyAllProductsSectionIsVisible() {
    const allProductsHeading = locators.allProductsHeading(this.page);
    await this.expectVisible(allProductsHeading);
    await this.expectHaveText(allProductsHeading, 'All Products');
  }
  async verifyFeaturedItemsSectionIsVisible() {
    const featuredItemsHeading = locators.featureItemsHeading(this.page);
    await this.expectVisible(featuredItemsHeading);
    await this.expectHaveText(featuredItemsHeading, 'Features Items');
  }
  async getFeaturedProductItemCount(): Promise<number> {
    return await locators.featuredItems(this.page).count();
  }
  async getNameInnerText(): Promise<string> {
    const featuredItems = locators.featuredItems(this.page).first();
    return await featuredItems.locator('h2').last().innerText();
  }

  async verifyProductCardDetailsAreCorrect(): Promise<void> {
    const count = await this.getFeaturedProductItemCount();
    Logger.info(`Found ${count} featured product items on the page.`);
    for (let i = 0; i < count; i++) {
      const root = this.productAt(i);
      const actualCard = await this.readCardDetailsFromRoot(root);
      const expectedCard = pickFields(data[i], ['id', 'name', 'price']); // Assuming test data is in the same order as the products on the page
      // Compare only id, name, and price for the card details
      compareByKey(actualCard, expectedCard, ['id', 'name', 'price']);
    }
  }

  async getFirstProductCardDetails(): Promise<{ id: string | null; name: string; price: string }> {
    return this.readCardDetailsFromRoot(this.productAt(0));
  }

  async compareFirstProductCardDetailsWithTestData(): Promise<void> {
    const actualCard = await this.getFirstProductCardDetails();
    const expectedCard = pickFields(data[0], ['id', 'name', 'price']);
    compareByKey(actualCard, expectedCard, ['id', 'name', 'price']);
  }

  // ---------- DTO builders ----------
  async getCardDetails(): Promise<ProductCardDTO> {
    const { id, name, price } = await this.getFirstProductCardDetails();
    return { id, name, price };
  }
}
