import { BasePage } from '/base/base.page';
import { products } from '/test-data';
import { compareByKey, pickFields, Logger, filterProducts } from '/utilities';
import { ProductCardDTO } from '/models/product-card.model';
import { routes } from '/config/routes';
import { expect, Page, Locator } from '@playwright/test';
import { ProductLocators } from './product.locator';

export class ProductsPage extends BasePage {
  private readonly locators: ProductLocators;
  
  constructor(protected readonly page: Page) {
    super(page);
    this.locators = new ProductLocators(page);
  }

  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.products}$`));
    await expect(this.locators.allProductsSection).toBeVisible();
    await expect(this.locators.brandSection).toBeVisible();
    await expect(this.locators.categorySection).toBeVisible();
  }
  // ---------- Methods ----------
  public getFeatureItems(): Locator {
    return this.locators.productContainer.locator(this.locators.perPoductContainer); // locator('.features_items').locator('.col-sm-4')
  }
  public async getProductID(): Promise<string | null> {
    const productID = this.getFeatureItems().first().getAttribute('data-product-id');
    return productID;
  }
  public async getProductName(): Promise<string> {
    return await this.getFeatureItems().innerText();
  }
  public async getProductPrice(): Promise<string> {
    return await this.getFeatureItems().first().innerText();
  }
  public async getFeaturedProductItemCount(): Promise<number> {
    return await this.getFeatureItems().count();
  }
  public productAt(index: number): Locator {
    return this.getFeatureItems().nth(index);
  }
  public async clickViewProductButtonByIndex(index: number): Promise<void> {
    await this.locators.viewLink.click();
  }
  public async searchProduct(search: string): Promise<void> {
    await this.locators.searchProductInput.fill(search);
    await this.locators.searchButton.click();
  }
  public async verifySearchedProductAreDisplayedAndCorrect(): Promise<void> {
    const count = await this.getFeaturedProductItemCount();
    Logger.info(`Found ${count} featured product items on the page.`);

    for (let i = 0; i < count; i++) {
      const root = this.productAt(i);
      const actualCard = await this.readCardDetailsFromRoot();
      const pick = pickFields(products[i], ['id', 'name', 'price']); // Assuming test data is in the same order as the products on the page
      const expectedCard = pick.filterProducts(products, 'tops');
      Logger.info(expectedCard);
      // Compare only id, name, and price for the card details
      compareByKey(actualCard, expectedCard, ['id', 'name', 'price']);
    }

  }
  // checking all product card details are correct by comparing with test data (only id, name, price)
  public async verifyProductCardDetailsAreCorrect(): Promise<void> {
    const count = await this.getFeaturedProductItemCount();
    Logger.info(`Found ${count} featured product items on the page.`);
    for (let i = 0; i < count; i++) {
      const index = this.productAt(i);
      const actualCard = await this.readCardDetailsFromRoot();
      const expectedCard = pickFields(products[i], ['id', 'name', 'price']); // Assuming test data is in the same order as the products on the page
      compareByKey(actualCard, expectedCard, ['id', 'name', 'price']); // Compare only id, name, and price for the card details
    }
  }
  // // not used for now
  // async getFirstProductCardDetails(index: number): Promise<ProductCardDTO> {
  //   return this.readCardDetailsFromRoot(this.productAt(index));
  // }
  // async compareProductCardDetailsWithTestDataByIndex(index: number): Promise<void> {
  //   const actualCard = await this.readCardDetailsFromRoot(this.productAt(index));
  //   const expectedCard = pickFields(products[index], ['id', 'name', 'price']);
  //   compareByKey(actualCard, expectedCard, ['id', 'name', 'price']);
  // }

  // ---------- DTO Transformation Helpers ----------
  public async readCardDetailsFromRoot(): Promise<ProductCardDTO> {
    return {
      id: await this.getProductID(),
      name: await this.getProductName(),
      price: await this.getProductPrice()
    };
  }
}
