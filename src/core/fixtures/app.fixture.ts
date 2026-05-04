import { test as base } from '@playwright/test';
import { POManager } from '../managers/pom.manager';
import { ProductAPI } from '/api/product.api';
import { FlowManager } from '../managers/flow.manager';

type MyFixtures = {
  pom: POManager;
  api: ProductAPI;
  flow: FlowManager;
};

export const test = base.extend<MyFixtures>({
  pom: async ({ page }, use) => {
    await use(new POManager(page));
  },
  api: async ({ request }, use) => {
    await use(new ProductAPI(request));
  },
  flow: async ({ pom }, use) => {
    await use(new FlowManager(pom));
  },
});

export { expect, Page } from '@playwright/test';
//export { checkForBrokenLink, checkForBrokenLinks };
