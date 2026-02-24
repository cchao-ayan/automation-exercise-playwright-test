import { BasePage } from '../../pages';
import { products } from '../../test-data';
import { locators, Locator } from './ProductsPageLocators';
import { compareByKey, pickFields, Logger } from '../../utilities';
import { ProductCardDTO } from '../../dto/ProductCard.dto';

export class ProductsPage extends BasePage {
  // Helper to get the root locator for a product card by index
  productAt(index: number): Locator {
    return locators.featuredItems(this.page).nth(index);
  }
  // ---------- Getters ----------
  async getProductID(root: Locator): Promise<string | null> {
    return await locators.productID(root).getAttribute('data-product-id');
  }
  async getProductName(root: Locator): Promise<string> {
    return await locators.productName(root).innerText();
  }
  async getProductPrice(root: Locator): Promise<string> {
    return await locators.productPrice(root).first().innerText();
  }
  // ---------- Methods ----------
  async ready() {
    await this.verifyProductsPageUrl('https://automationexercise.com/products');
    await this.header.verifyLogoIsVisible();
    await this.verifyCategorySectionIsVisible();
    await this.verifyBrandSectionIsVisible();
    //   await this.verifyAllProductsSectionIsVisible();
  }
  async clickViewProductButtonByIndex(index: number) {
    this.click(locators.viewProductButton(this.productAt(index)));
  }
  async clickPololink() {
    await this.click(locators.poloLink(this.page));
  }
  async navigateToProductsPage(url: string) {
    await this.goToUrl(url);
  }
  async searchProduct(product: string) {
    await this.fill(locators.searchProduct(this.page), product)
  }
  async clickSearchProductButton(){
    await this.click(locators.searchButton(this.page));
  }
  async verifySearchProductHeading(){
    await this.expectVisible(locators.searchProductHeading(this.page));
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
  // checking all product card details are correct by comparing with test data (only id, name, price)
  async verifyProductCardDetailsAreCorrect(): Promise<void> {
    const count = await this.getFeaturedProductItemCount();
    Logger.info(`Found ${count} featured product items on the page.`);
    for (let i = 0; i < count; i++) {
      const root = this.productAt(i);
      const actualCard = await this.readCardDetailsFromRoot(root);
      const expectedCard = pickFields(products[i], ['id', 'name', 'price']); // Assuming test data is in the same order as the products on the page
      // Compare only id, name, and price for the card details
      compareByKey(actualCard, expectedCard, ['id', 'name', 'price']);
    }
  }
  // not used for now
  async getFirstProductCardDetails(index: number): Promise<ProductCardDTO> {
    return this.readCardDetailsFromRoot(this.productAt(index));
  }
  async compareProductCardDetailsWithTestDataByIndex(index: number): Promise<void> {
    const actualCard = await this.readCardDetailsFromRoot(this.productAt(index));
    const expectedCard = pickFields(products[index], ['id', 'name', 'price']);
    compareByKey(actualCard, expectedCard, ['id', 'name', 'price']);
  }

  // ---------- DTO Transformation Helpers ----------
  private async readCardDetailsFromRoot(root: Locator): Promise<ProductCardDTO> {
    return {
      id: await this.getProductID(root),
      name: await this.getProductName(root),
      price: await this.getProductPrice(root)
    };
  }
}
