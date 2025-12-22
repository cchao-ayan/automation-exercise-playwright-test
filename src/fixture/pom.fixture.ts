import {test as base} from '@playwright/test';
import { POManager }  from '../pages/manager/POManager';
import { POManager2 }  from '../pages/manager/POManager2';

type MyFixtures = {
    pom: POManager;
    pom2: POManager2;
};

export const test = base.extend<MyFixtures>({
    pom: async ({ page} , use) => {
        await use(new POManager(page));
    },    
    pom2: async ({ page }, use) => {
        const pom2 = new POManager2(page);
        await pom2.init();
        await use(pom2);
    }
});

export { expect } from '@playwright/test';