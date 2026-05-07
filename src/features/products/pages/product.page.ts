import { BasePage } from '@core/base/base.page';
import { routes } from '@config/routes';
import { expect, Page, Locator } from '@playwright/test';
import { ProductApi, ProductCard, normalizeProductData } from '@features/products/types/product.type';
import { compareByKey } from '@shared/utils/compare-by-key';
import { ProductAPI } from '/api/product.api';

type ProductView = 'info' | 'overlay';

export class ProductsPage extends BasePage {

  constructor(protected readonly page: Page) {
    super(page);
  }
  readonly featureItemsSection = this.page.getByRole('heading', { name: 'Features Items' });
  readonly allProductsSection = this.page.getByRole('heading', { name: 'All Products' });
  readonly categorySection = this.page.getByRole('heading', { name: 'Category' });
  readonly brandSection = this.page.getByRole('heading', { name: 'Brands' });
  readonly searchProductSection = this.page.getByRole('heading', { name: 'Searched Products' });
  readonly recommendedSection = this.page.locator('div.recommended-items');
  // Buttons
  readonly addToCartButton = this.page.getByRole('button', { name: 'Add to cart' });
  readonly searchButton = this.page.locator('#submit_search');
  readonly searchProductInput = this.page.getByRole('textbox', { name: 'Search Product' });
  // Texts
  readonly idText = this.page.locator('a').first();
  readonly nameText = this.page.locator('p').first();
  readonly priceText = this.page.locator('Rs.');
  // Images
  readonly productImage = this.page.locator('img').first();
  // Link
  readonly poloLink = this.page.getByRole('link', { name: 'Polo' });
  readonly viewProductLink = this.page.getByRole('link', { name: 'View Product' });
  // Containers
  readonly productsContainer = this.page.locator('.features_items');
  readonly perPoductContainer = this.page.locator('.col-sm-4');
  readonly productInfo = this.page.locator('.productinfo');
  readonly productOverlay = this.page.locator('.product-overlay');
  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.products}$`));
    await expect(this.allProductsSection).toBeVisible();
    await expect(this.brandSection).toBeVisible();
    await expect(this.categorySection).toBeVisible();
  }
  // ---------- Methods ----------
  public productAt(index: number): Locator {
    return this.productsContainer.locator(this.perPoductContainer).nth(index); // locator('.features_items').locator('.col-sm-4')
  }
  public productViewAt(index: number, view: ProductView): Locator {
    return view === 'info'
      ? this.productAt(index).locator(this.productInfo)
      : this.productAt(index).locator(this.productOverlay);
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
      .locator(this.idText)
      .getAttribute('data-product-id');
  }
  public async productName(index: number, view: ProductView): Promise<string> {
    return this.productViewAt(index, view).locator(this.nameText).innerText();
  }
  public async productPrice(index: number, view: ProductView): Promise<string> {
    return this.productViewAt(index, view).locator(this.priceText).innerText();
  }
  public async clickAddToCartButton(index: number, view: ProductView): Promise<void> {
    await this.productViewAt(index, view).locator(this.addToCartButton).click();
  }
  public async clickViewProductButton(index: number): Promise<void> {
    await this.productAt(index).locator(this.viewProductLink).click();
  }
  public async searchProduct(search: string): Promise<void> {
    await this.searchProductInput.fill(search);
    await this.searchButton.click();
  }

  public async productCard(index: number, view: ProductView): Promise<ProductCard> {
    return {
      id: await this.productID(index, view),
      name: await this.productName(index, view),
      price: await this.productPrice(index, view),
    };
  }

  public async compareProductCardWithApi(
    index: number,
    view: ProductView,
    productApi: ProductApi[],
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
