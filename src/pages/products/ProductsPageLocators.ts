import { Page, Locator } from '@playwright/test';

export const locators = {
  featuredItems: (page: Page) => page.locator('div.features_items >> div.col-sm-4'), // root Locator
  productID: (root: Locator): Locator => root.locator('a').first(),
  productName: (root: Locator): Locator => root.locator('p').first(),
  productPrice: (root: Locator): Locator => root.getByText('Rs.'),
  addToCartButton: (root: Locator): Locator => root.getByRole('button', { name: 'Add to cart' }),
  productImage: (root: Locator): Locator => root.locator('img').first(),
  viewProductButton: (root: Locator): Locator => root.getByRole('link', { name: 'View Product' }),

  productBrand: (root: Locator): Locator => root.getByText('Brand:'),
  productCategory: (root: Locator): Locator => root.locator('p').nth(1),
  productRating: (root: Locator): Locator => root.locator('img').nth(2),
  productQuantiyLabel: (root: Locator): Locator => root.getByText('Quantity:'),
  productQuantity: (root: Locator): Locator => root.locator('#quantity'),
  productAvailability: (root: Locator): Locator => root.getByText('Availability:'),
  productCondition: (root: Locator): Locator => root.getByText('Condition:'),


  recommendedItems: (page: Page) => page.locator('div.recommended-items'),
  featureItemsHeading: (page: Page) => page.getByRole('heading', { name: 'Features Items', level: 2 }),
  allProductsHeading: (page: Page) => page.getByRole('heading', { name: 'All Products', level: 2 }),
  categoryHeading: (page: Page) => page.getByRole('heading', { name: 'Category', level: 2 }),
  brandHeading: (page: Page) => page.getByRole('heading', { name: 'Brands', level: 2 }),
  poloLink: (page: Page) => page.getByRole('link', { name: '(6) Polo' }),

  searchProduct: (page: Page) => page.getByRole('textbox', { name: 'Search Product' }),
  searchButton: (page: Page) => page.locator('#submit_search'),
  searchProductHeading: (page: Page) => page.getByRole('heading', { name: 'Searched Products' })
};

export { Locator } from '@playwright/test';
