import { BasePage } from '/pages/base/base.page';
import { routes } from '/config/routes';
import { expect, Page, Locator } from '@playwright/test';
import { ProductLocators } from './product.locator';
import { ProductApiModel, ProductCardModel } from '/models/product.model';
import { compareByKey } from '/utils/compare-by-key';
import { normalizeProductData } from '/models/product.model';
import { ProductAPI } from '/api/product.api';

type ProductView = 'info' | 'overlay';

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
  public productAt(index: number): Locator {
    return this.locators.productsContainer.locator(this.locators.perPoductContainer).nth(index); // locator('.features_items').locator('.col-sm-4')
  }
  public productViewAt(index: number, view: ProductView): Locator {
    return view === 'info'
      ? this.productAt(index).locator(this.locators.productInfo)
      : this.productAt(index).locator(this.locators.productOverlay);
    // if (view === 'info') {
    //   return this.productAt(index).locator(this.locators.productInfo);
    // }
    // if (view === 'overlay') {
    //   return this.productAt(index).locator(this.locators.productOverlay);
    // }
    // return this.productAt(index);
  }
  public async productID(index: number, view: ProductView): Promise<string | null> {
    return this.productViewAt(index, view)
      .locator(this.locators.idText)
      .getAttribute('data-product-id');
  }
  public async productName(index: number, view: ProductView): Promise<string> {
    return this.productViewAt(index, view).locator(this.locators.nameText).innerText();
  }
  public async productPrice(index: number, view: ProductView): Promise<string> {
    return this.productViewAt(index, view).locator(this.locators.priceText).innerText();
  }
  public async clickAddToCartButton(index: number, view: ProductView): Promise<void> {
    await this.productViewAt(index, view).locator(this.locators.addToCartButton).click();
  }
  public async clickViewProductButton(index: number): Promise<void> {
    await this.productAt(index).locator(this.locators.viewProductLink).click();
  }
  public async searchProduct(search: string): Promise<void> {
    await this.locators.searchProductInput.fill(search);
    await this.locators.searchButton.click();
  }

  public async productCard(index: number, view: ProductView): Promise<ProductCardModel> {
    return {
      id: await this.productID(index, view),
      name: await this.productName(index, view),
      price: await this.productPrice(index, view),
    };
  }

  public async compareProductCardWithApi(
    index: number,
    view: ProductView,
    productApi: ProductApiModel[],
  ): Promise<void> {
    const actual = await this.productCard(index, view);
    const productsFromApi = productApi.find((p) => String(p.id) === actual.id);
    if (!productsFromApi) {
      throw new Error('No product data returned from API');
    }
    const expected = normalizeProductData(productsFromApi);
    compareByKey(actual, expected, ['id', 'name', 'price']);
  }
}
