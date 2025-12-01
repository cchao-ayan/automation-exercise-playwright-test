import {test as base} from '@playwright/test';
import { POManager}  from '../pages/manager/POManager';

type MyFixtures = {
    pom: POManager;
};

export const test = base.extend<MyFixtures>({
    pom: async ({ page} , use) => {
        await use(new POManager(page));
    }   
});

export { expect } from '@playwright/test';