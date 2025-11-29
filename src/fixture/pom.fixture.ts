import {test as base} from '@playwright/test';
import {ManagePage} from '../pages/ManagePage';

type MyFixtures = {
    managePage: ManagePage;
};

export const test = base.extend<MyFixtures>({
    managePage: async ({ page} , use) => {
        await use(new ManagePage(page));
    }   
});

export { expect } from '@playwright/test';