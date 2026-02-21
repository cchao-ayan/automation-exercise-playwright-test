import { Page, Locator } from '@playwright/test';

export const locators = {
  productID: (root: Locator): Locator => root.locator('a').first(),
  productName: (root: Locator): Locator => root.locator('p').first(),
  productPrice: (root: Locator): Locator => root.getByText('Rs.'),
  productBrand: (root: Locator): Locator => root.getByText('Brand:'),
  productCategory: (root: Locator): Locator => root.locator('p').nth(1),
  productRating: (root: Locator): Locator => root.locator('img').nth(2),
  productQuantiyLabel: (root: Locator): Locator => root.getByText('Quantity:'),
  productQuantity: (root: Locator): Locator => root.locator('#quantity'),
  addToCartButton: (root: Locator): Locator => root.getByRole('button', { name: 'Add to cart' }),
  productAvailability: (root: Locator): Locator => root.getByText('Availability:'),
  productCondition: (root: Locator): Locator => root.getByText('Condition:'),
  productImage: (root: Locator): Locator => root.locator('img').first(),

  featuredItems: (page: Page) => page.locator('div.features_items >> div.col-sm-4'),
  //featuredDetails: (page: Page) => page.locator('div.col-sm-4'),
  recommendedItems: (page: Page) => page.locator('div.recommended-items'),
  featureItemsHeading: (page: Page) =>
    page.getByRole('heading', { name: 'Features Items', level: 2 }),
  allProductsHeading: (page: Page) => page.getByRole('heading', { name: 'All Products', level: 2 }),
  categoryHeading: (page: Page) => page.getByRole('heading', { name: 'Category', level: 2 }),
  brandHeading: (page: Page) => page.getByRole('heading', { name: 'Brands', level: 2 }),
  viewProductLink: (page: Page) => page.getByRole('link', { name: 'View Product' }),
  poloLink: (page: Page) => page.getByRole('link', { name: '(6) Polo' }),
};
