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

  productImage: (root: Locator): Locator => root.locator('img').first(),
  productName: (root: Locator): Locator => root.locator('p').first(),
  productPrice: (root: Locator): Locator => root.locator('h2').first(),
  addToCartButton: (root: Locator): Locator =>    
    root.locator('button[class*="add"], a[class*="add"], button:has-text("Add")'),
  productLink: (root: Locator): Locator => root.locator('a[href*="product"], a[href*="/p/"]'),
  productRating: (root: Locator): Locator =>
    root.locator('div[class*="rating"], span[class*="stars"], i[class*="star"]'),
  stockStatus: (root: Locator): Locator =>
    root.locator('[class*="stock"], [class*="availability"], text=/In Stock|Out of Stock/i'),
  productDescription: (root: Locator): Locator =>
    root.locator('[class*="description"], p:not([class*="name"])'),
  productId: (root: Locator): Locator =>
    root.locator('[class*="product-id"], [class*="sku"], [data-product-id]'),
  quickViewButton: (root: Locator): Locator =>
    root.locator('button:has-text("Quick View"), a:has-text("Quick View")'),
  discountBadge: (root: Locator): Locator =>
    root.locator('[class*="discount"], [class*="sale"], [class*="badge"]'),
};
