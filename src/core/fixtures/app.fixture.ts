import { test as base } from '@playwright/test';
import { POManager } from '../managers/pom.manager';
import { ProductAPI } from '/api/product.api';

type MyFixtures = {
  pom: POManager;
  api: ProductAPI;
};

export const test = base.extend<MyFixtures>({
  pom: async ({ page }, use) => {
    await use(new POManager(page));
  },
  api: async ({ request }, use) => {
    await use(new ProductAPI(request));
  }
});

export { expect, Page } from '@playwright/test';
//export { checkForBrokenLink, checkForBrokenLinks };
