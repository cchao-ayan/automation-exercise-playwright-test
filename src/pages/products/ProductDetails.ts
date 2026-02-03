import { Locator } from '@playwright/test';

/**
 * Page object for a single product details element.
 */
export class ProductDetails {
  constructor(protected root: Locator) {}

  /** Return the image `src` or null if not present. */
  async getProductImage(): Promise<string | null> {
    const img = this.root.locator('img');
    return await img.getAttribute('src');
  }

  /** Return locator for cost element. */
  getCost(): Locator {
    return this.root.locator('h2');
  }

  /** Get cost text. */
  async getCostText(): Promise<string> {
    return await this.getCost().innerText();
  }

  /** Return locator for name element. */
  getName(): Locator {
    return this.root.locator('p');
  }

  /** Get name text. */
  async getNameText(): Promise<string> {
    return await this.getName().innerText();
  }

  /** Return aggregated product details with concrete types. */
  async getProductDetails(): Promise<{
    productImage: string | null;
    cost: string;
    name: string;
  }> {
    return {
      productImage: await this.getProductImage(),
      cost: await this.getCostText(),
      name: await this.getNameText(),
    };
  }
}
