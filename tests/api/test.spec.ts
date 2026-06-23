import { test } from '@playwright/test';
import { ProductAPI } from "@features/products/api/product.api";

test.describe('API Test', () => {
  test('Get all Products using API', async ({ request }) => {
    const productAPI = new ProductAPI(request);
    const products = await productAPI.getAllProducts();
    
  });
});
