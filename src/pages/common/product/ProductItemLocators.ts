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
  productID: (root: Locator): Locator => root.locator('a').first(),
  productName: (root: Locator): Locator => root.locator('p').first(),
  productPrice: (root: Locator): Locator => root.getByText('Rs.'),
  productBrand: (root: Locator): Locator => root.getByText('Brand:'),
  //productUserType: (root: Locator): Locator => root.getByText('User Type:'),
  productCategory: (root: Locator): Locator => root.locator('p').nth(1),
  
  
  productRating: (root: Locator): Locator => root.locator('img').nth(2),
  productQuantiyLabel: (root: Locator): Locator => root.getByText('Quantity:'),
  productQuantity: (root: Locator): Locator => root.locator('#quantity'),
  addToCartButton: (root: Locator): Locator => root.getByRole('button', { name: 'Add to cart' }),
  productAvailability: (root: Locator): Locator => root.getByText('Availability:'),
  productCondition: (root: Locator): Locator => root.getByText('Condition:'),  
  productImage: (root: Locator): Locator => root.locator('img').first(),
};
