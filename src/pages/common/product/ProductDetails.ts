import { Locator, Page } from '@playwright/test';
import { CommonPageMethods } from '../../base/CommonPageMethod';
import { locators } from './ProductDetailsLocators';

/**
 * Page object for a single product details/card element.
 *
 * Represents a product item displayed in a list or grid view.
 * Extends CommonPageMethods to inherit common utility methods.
 * Can be used in multiple pages: ProductsPage, ProductDetailsPage, etc.
 *
 * Usage:
 *   const productRoot = page.locator('.product-item').first();
 *   const productDetails = new ProductDetails(page, productRoot);
 *   const name = await productDetails.getProductNameText();
 *
 * @example
 *   async productAt(index: number) {
 *     const items = locators.featuredItems(this.page);
 *     return new ProductDetails(this.page, items.nth(index));
 *   }
 */
export class ProductDetails extends CommonPageMethods {
  constructor(
    page: Page,
    protected root: Locator,
  ) {
    super(page);
  }
  // Helper: returns true when the locator resolves to at least one element
  private async exists(locator: Locator): Promise<boolean> {
    try {
      return (await locator.count()) > 0;
    } catch {
      return false;
    }
  }
  async getProductImage(): Promise<string | null> {
    const img = locators.productImage(this.root);
    if (!(await this.exists(img))) return null;
    try {
      const productImage = await img.getAttribute('src');
      console.log(`Product Image SRC: ${productImage}`);
      return productImage;
    } catch (error) {
      console.error('Error getting product image:', error);
      return null;
    }
  }
  getProductName(): Locator {
    return locators.productName(this.root);
  }
  async getProductNameText(): Promise<string> {
    const productNameText = await this.getInnerText(this.getProductName());
    console.log(`Product Name: ${productNameText}`);
    return productNameText;
  }

  getProductPrice(): Locator {
    return locators.productPrice(this.root);
  }
  async getProductPriceText(): Promise<string> {
    const productPriceText = await this.getInnerText(this.getProductPrice());
    console.log(`Product Price: ${productPriceText}`);
    return productPriceText;
  }
  getAddToCartButton(): Locator {
    return locators.addToCartButton(this.root);
  }
  async clickAddToCart(): Promise<void> {
    await this.click(this.getAddToCartButton());
  }
  getProductLink(): Locator {
    return locators.productLink(this.root);
  }
  async clickProductLink(): Promise<void> {
    await this.click(this.getProductLink());
  }
  getProductRating(): Locator {
    return locators.productRating(this.root);
  }
  async getProductRatingText(): Promise<string> {
    const rating = this.getProductRating();
    if (!(await this.exists(rating))) return '';
    const productRatingText = await this.getInnerText(rating, true);
    console.log(`Product Rating: ${productRatingText}`);
    return productRatingText;
  }
  getStockStatus(): Locator {
    return locators.stockStatus(this.root);
  }
  async isInStock(): Promise<boolean> {
    try {
      const status = await this.getInnerText(this.getStockStatus(), true);
      return !status.toLowerCase().includes('out');
    } catch {
      return true; // Assume in stock if status not found
    }
  }
  getProductDescription(): Locator {
    return locators.productDescription(this.root);
  }
  async getProductDescriptionText(): Promise<string> {
    const description = this.getProductDescription();
    if (!(await this.exists(description))) return '';
    return await this.getInnerText(description, true);
  }
  /**
   * Get product details with optional scope control.
   * @param scope - 'card' for card-level locators (rating, stock, description optional)
   *                'page' for full page-level details (all fields required)
   * @returns Promise with product details
   */
  async getProductDetails(options?: { scope?: 'card' | 'page' }): Promise<{
    image: string | null;
    name: string;
    price: string;
    rating?: string;
    inStock?: boolean;
    description?: string;
  }> {
    const scope = options?.scope ?? 'card'; // default: 'card'

    const image = await this.getProductImage();
    const name = await this.getProductNameText();
    const price = await this.getProductPriceText();

    // For 'card' scope: optional fields (checked for existence)
    // For 'page' scope: fetch all fields even if not present on card
    if (scope === 'card') {
      const rating = (await this.exists(locators.productRating(this.root)))
        ? await this.getProductRatingText()
        : undefined;

      const inStock = (await this.exists(locators.stockStatus(this.root)))
        ? await this.isInStock()
        : undefined;

      const description = (await this.exists(locators.productDescription(this.root)))
        ? await this.getProductDescriptionText()
        : undefined;

      return { image, name, price, rating, inStock, description };
    } else {
      // 'page' scope: always try to fetch all details (may fail for card-only fields)
      const rating = await this.getProductRatingText();
      const inStock = await this.isInStock();
      const description = await this.getProductDescriptionText();

      return { image, name, price, rating, inStock, description };
    }
  }
}
