import { Page } from '@playwright/test';

export class ProductLocators {
  constructor(private readonly page: Page) {}
  // Sections
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
}
