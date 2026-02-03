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

  /**
   * Return the image `src` attribute or null if not present.
   * @returns Promise resolving to image URL or null
   */
  async getProductImage(): Promise<string | null> {
    return await locators.productImage(this.root).getAttribute('src');
  }

  /**
   * Return locator for product name element.
   * @returns Locator for the product name
   */
  getProductName(): Locator {
    return locators.productName(this.root);
  }

  /**
   * Get product name as text.
   * Uses inherited getInnerText() from CommonPageMethods.
   * @returns Promise resolving to product name string
   */
  async getProductNameText(): Promise<string> {
    return await this.getInnerText(this.getProductName());
  }

  /**
   * Return locator for product price element.
   * @returns Locator for the product price
   */
  getProductPrice(): Locator {
    return locators.productPrice(this.root);
  }

  /**
   * Get product price as text.
   * @returns Promise resolving to product price string
   */
  async getProductPriceText(): Promise<string> {
    return await this.getInnerText(this.getProductPrice());
  }

  /**
   * Return locator for add to cart button (if present).
   * @returns Locator for the add to cart button
   */
  getAddToCartButton(): Locator {
    return locators.addToCartButton(this.root);
  }

  /**
   * Click the add to cart button.
   * @returns Promise that resolves when button is clicked
   */
  async clickAddToCart(): Promise<void> {
    await this.click(this.getAddToCartButton());
  }

  /**
   * Return locator for product link.
   * @returns Locator for the product link
   */
  getProductLink(): Locator {
    return locators.productLink(this.root);
  }

  /**
   * Click the product link to navigate to detail page.
   * @returns Promise that resolves when link is clicked
   */
  async clickProductLink(): Promise<void> {
    await this.click(this.getProductLink());
  }

  /**
   * Return locator for product rating (if present).
   * @returns Locator for the rating element
   */
  getProductRating(): Locator {
    return locators.productRating(this.root);
  }

  /**
   * Get product rating as text (optional - returns empty string if not found).
   * @returns Promise resolving to rating text or empty string
   */
  async getProductRatingText(): Promise<string> {
    return await this.getInnerText(this.getProductRating(), true);
  }

  /**
   * Return locator for stock status (if present).
   * @returns Locator for the stock status
   */
  getStockStatus(): Locator {
    return locators.stockStatus(this.root);
  }

  /**
   * Check if product is in stock.
   * @returns Promise resolving to true if in stock, false otherwise
   */
  async isInStock(): Promise<boolean> {
    try {
      const status = await this.getInnerText(this.getStockStatus(), true);
      return !status.toLowerCase().includes('out');
    } catch {
      return true; // Assume in stock if status not found
    }
  }

  /**
   * Return locator for product description (if present).
   * @returns Locator for the description
   */
  getProductDescription(): Locator {
    return locators.productDescription(this.root);
  }

  /**
   * Get product description as text (optional - returns empty string if not found).
   * @returns Promise resolving to description text or empty string
   */
  async getProductDescriptionText(): Promise<string> {
    return await this.getInnerText(this.getProductDescription(), true);
  }

  /**
   * Return aggregated product details with all available information.
   * @returns Promise resolving to object containing product details
   */
  async getProductDetails(): Promise<{
    image: string | null;
    name: string;
    price: string;
    rating?: string;
    inStock?: boolean;
    description?: string;
  }> {
    return {
      image: await this.getProductImage(),
      name: await this.getProductNameText(),
      price: await this.getProductPriceText(),
      rating: await this.getProductRatingText(),
      inStock: await this.isInStock(),
      description: await this.getProductDescriptionText(),
    };
  }
}
