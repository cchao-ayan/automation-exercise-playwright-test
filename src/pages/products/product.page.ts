import { BasePage } from '../../base/base.page';
import { products } from '../../test-data';
import { compareByKey, pickFields, Logger, filterProducts } from '../../utilities';
import { ProductCardDTO } from '../../dto/product-card.dto';
import { ROUTES } from '../../constant/routes.const';
import { expect, Page, Locator } from '@playwright/test';
import { PRODUCT } from './product.locator';

export class ProductsPage extends BasePage {
  private readonly productLocator;
  
  constructor(protected readonly page: Page) {
    super(page);
    this.productLocator = PRODUCT(page);
  }

  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.PRODUCTS}$`));
    await expect(this.productLocator.section.allProducts).toBeVisible();
    await expect(this.productLocator.section.brand).toBeVisible();
    await expect(this.productLocator.section.category).toBeVisible();
  }
  // ---------- Methods ----------
  private getFeatureItems(): Locator {
    return this.productLocator.container.product.locator(this.productLocator.container.perPoduct); // locator('.features_items').locator('.col-sm-4')
  }
  private async getProductID(): Promise<string | null> {
    const productID = this.productLocator.container.product.locator(this.productLocator.container.perPoduct).first().getAttribute('data-product-id');
    return productID;
  }
  private async getProductName(): Promise<string> {
    return await this.getFeatureItems().innerText();
  }
  private async getProductPrice(): Promise<string> {
    return await this.getFeatureItems().first().innerText();
  }
  private async getFeaturedProductItemCount(): Promise<number> {
    return await this.getFeatureItems().count();
  }
  private productAt(index: number): Locator {
    return this.getFeatureItems().nth(index);
  }
  async clickViewProductButtonByIndex(index: number): Promise<void> {
    await this.productLocator.link.view.click();
  }
  async searchProduct(search: string): Promise<void> {
    await this.productLocator.input.searchProduct.fill(search);
    await this.productLocator.button.search.click();
  }
  async verifySearchedProductAreDisplayedAndCorrect(): Promise<void> {
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
  async verifyProductCardDetailsAreCorrect(): Promise<void> {
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
  private async readCardDetailsFromRoot(): Promise<ProductCardDTO> {
    return {
      id: await this.getProductID(),
      name: await this.getProductName(),
      price: await this.getProductPrice()
    };
  }
}
