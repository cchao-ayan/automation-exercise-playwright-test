import { BasePage } from '@core/base/base.page';
import { normalizeProductData } from '@features/products/types/product.type';
import  products  from '@features/products/datas/products.test-data.json';
import { Page, expect } from '@playwright/test';
import { ProductDetails } from '@features/products/types/product.type';
import { compareByKey } from '@shared/utils';
import { routes } from '@config/routes';

export class ProductDetailsPage extends BasePage {

  constructor(protected readonly page: Page) {
    super(page);
  }
    // root Locator
  readonly productInfo = this.page.locator('div.product-information');
  // component of productInfo locator
  readonly productID = this.productInfo.locator('#product_id');
  readonly productName = this.productInfo.locator('h2').first();
  readonly productPrice = this.productInfo.getByText('Rs.');
  readonly productBrand = this.productInfo.locator('p').last();
  readonly productCategory = this.productInfo.locator('p').first();
  readonly addToCartButton = this.productInfo.getByRole('button', { name: 'Add to cart' });
  readonly productImage = this.productInfo.locator('img').first();
  readonly viewProductButton = this.productInfo.getByRole('link', { name: 'View Product' });
  readonly productRating = this.productInfo.locator('img').nth(2);
  readonly productQuantiyLabel = this.productInfo.getByText('Quantity:');
  readonly productQuantity = this.productInfo.locator('#quantity');
  readonly productAvailability = this.productInfo.getByText('Availability:');
  readonly productCondition = this.productInfo.getByText('Condition:');

  // other locators
  readonly newIcon = this.page.getByRole('img', { name: 'ecommerce website products' }).nth(1);
  readonly submitButton = this.page.getByRole('button', { name: 'Submit' });
  readonly reviewSection = this.page.getByText('Write Your Review');
  readonly reviewNameInput = this.page.getByPlaceholder('Your Name');
  readonly reviewEmailInput = this.page.getByPlaceholder('Email Address');
  readonly reviewTextInput = this.page.getByPlaceholder('Your Review');

  public async assertPageLoaded(index: number): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.productDetails}${index}$`));
    await expect(this.addToCartButton).toBeVisible();
    await expect(this.reviewSection).toBeVisible();
    await expect(this.submitButton).toBeVisible();
  }
  // ---------- Getters ----------
  public async getProductID(): Promise<string | null> {
    return await this.productID.getAttribute('value');
  }
  public async getProductName(): Promise<string> {
    return await this.productName.innerText();
  }
  public async getProductPrice(): Promise<string> {
    return await this.productPrice.first().innerText();
  }
  public async getProductBrand(): Promise<string> {
    const brand = await this.productBrand.innerText();
    return brand.replace('Brand: ', '').trim();
  }
  public async getProductCategory(): Promise<string> {
    const text = await this.productCategory.innerText();
    const removeCategoryText = text.replace('Category: ', '').trim();
    return removeCategoryText.split(' > ')[1];
  }
  public async getProductUsertype(): Promise<string> {
    const text = await this.productCategory.innerText();
    const removeCategoryText = text.replace('Category: ', '').trim();
    return removeCategoryText.split(' > ')[0];
  }
  // ---------- Methods ----------
  public async clickAddToCartButton() {
    await this.addToCartButton.click();
  }
  public async clickReviewSection() {
    await this.reviewSection.click();
  }
  public async clickSubmitButton() {
    await this.submitButton.click();
  }
  // ---------- Helpers ----------
  public async compareProductDetailsWithTestData(index: number): Promise<void> {
    const actual = await this.readCardDetailsFromUI();
    const expected = normalizeProductData(products[index]);
    compareByKey(actual, expected, ['id', 'name', 'price', 'brand', 'usertype', 'category']);
  }
  // ---------- DTO Transformation Helpers ----------
  private async readCardDetailsFromUI(): Promise<ProductDetails> {
    return {
      id: await this.getProductID(),
      name: await this.getProductName(),
      price: await this.getProductPrice(),
      brand: await this.getProductBrand(),
      usertype: await this.getProductUsertype(),
      category: await this.getProductCategory(),
    };
  }
}
