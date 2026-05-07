import { APIRequestContext } from '@playwright/test';

export class ProductAPI {
  constructor(private readonly request: APIRequestContext) {}
  public async getAllProducts() {
    const response = await this.request.get('/api/productsList');
    const responseBody = await response.json();
    return responseBody.products;
  }
}
