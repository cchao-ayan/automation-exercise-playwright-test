import { Page } from '@playwright/test';

export const locators = {
  featuredItems: (page: Page) => page.locator('div.features_items >> div.col-sm-4'),
  //featuredDetails: (page: Page) => page.locator('div.col-sm-4'),
  recommendedItems: (page: Page) => page.locator('div.recommended-items'),
  featureItemsHeading: (page: Page) =>
    page.getByRole('heading', { name: 'Features Items', level: 2 }),
  allProductsHeading: (page: Page) => page.getByRole('heading', { name: 'All Products', level: 2 }),
  categoryHeading: (page: Page) => page.getByRole('heading', { name: 'Category', level: 2 }),
  brandHeading: (page: Page) => page.getByRole('heading', { name: 'Brands', level: 2 }),
  addToCartButton: (page: Page) => page.getByRole('button', { name: 'Add to cart' }),
  viewProductLink: (page: Page) => page.getByRole('link', { name: 'View Product' }),
  poloLink: (page: Page) => page.getByRole('link', { name: '(6) Polo' }),
};
