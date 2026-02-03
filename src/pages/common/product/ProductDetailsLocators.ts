import { Locator } from '@playwright/test';

/**
 * Locators for ProductDetails component
 *
 * This file contains all CSS selectors for product item/card elements.
 * Used across multiple pages: ProductsPage, ProductDetailsPage, etc.
 *
 * Usage:
 *   const productRoot = page.locator('.product-item').first();
 *   const productDetails = new ProductDetails(productRoot);
 *   const name = await productDetails.getProductName();
 */
export const locators = {
  /**
   * Product image element
   * @param root - The root locator of the product item
   * @returns Locator for the product image
   */
  productImage: (root: Locator): Locator => root.locator('img').first(),

  /**
   * Product name/title element
   * Usually a <p> or <h2> tag containing the product name
   * @param root - The root locator of the product item
   * @returns Locator for the product name
   */
  productName: (root: Locator): Locator => root.locator('p').first(),

  /**
   * Product price/cost element
   * Usually an <h2> tag containing the price
   * @param root - The root locator of the product item
   * @returns Locator for the product price
   */
  productPrice: (root: Locator): Locator => root.locator('h2').first(),

  /**
   * Add to cart button (optional)
   * Matches common button classes like 'add-to-cart', 'add-to-bag', etc.
   * @param root - The root locator of the product item
   * @returns Locator for the add to cart button
   */
  addToCartButton: (root: Locator): Locator =>
    root.locator('button[class*="add"], a[class*="add"], button:has-text("Add")'),

  /**
   * Product link/URL (optional)
   * Allows clicking to navigate to product detail page
   * @param root - The root locator of the product item
   * @returns Locator for the product link
   */
  productLink: (root: Locator): Locator => root.locator('a[href*="product"], a[href*="/p/"]'),

  /**
   * Product rating/stars (optional)
   * Displays customer rating if present
   * @param root - The root locator of the product item
   * @returns Locator for the rating element
   */
  productRating: (root: Locator): Locator =>
    root.locator('div[class*="rating"], span[class*="stars"], i[class*="star"]'),

  /**
   * Stock/availability status (optional)
   * Shows if product is in stock or out of stock
   * @param root - The root locator of the product item
   * @returns Locator for the stock status
   */
  stockStatus: (root: Locator): Locator =>
    root.locator('[class*="stock"], [class*="availability"], text=/In Stock|Out of Stock/i'),

  /**
   * Product description (optional)
   * Brief description of the product
   * @param root - The root locator of the product item
   * @returns Locator for the description
   */
  productDescription: (root: Locator): Locator =>
    root.locator('[class*="description"], p:not([class*="name"])'),

  /**
   * Product ID/SKU (optional)
   * Product identifier or SKU number
   * @param root - The root locator of the product item
   * @returns Locator for the product ID
   */
  productId: (root: Locator): Locator =>
    root.locator('[class*="product-id"], [class*="sku"], [data-product-id]'),

  /**
   * Quick view button (optional)
   * Opens a quick preview modal
   * @param root - The root locator of the product item
   * @returns Locator for the quick view button
   */
  quickViewButton: (root: Locator): Locator =>
    root.locator('button:has-text("Quick View"), a:has-text("Quick View")'),

  /**
   * Discount badge (optional)
   * Shows discount percentage or "Sale" badge
   * @param root - The root locator of the product item
   * @returns Locator for the discount badge
   */
  discountBadge: (root: Locator): Locator =>
    root.locator('[class*="discount"], [class*="sale"], [class*="badge"]'),
};
