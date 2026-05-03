import { test } from '@playwright/test';
import { ProductAPI } from '/api/product.api';

test.describe('API Test', () => {
    test.only('Get all Products using API', async ({ request }) => {
        const productAPI = new ProductAPI(request);
        const products = await productAPI.getAllProducts();
        console.log(JSON.stringify(products, null, 2));
    });
});