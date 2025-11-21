import {test as base} from '@playwright/test';
import {ManagePage} from '../pages/ManagePage';

type MyFixtures = {
    managePage: ManagePage;
};

export const test = base.extend<MyFixtures>({
    managePage: async ({page}, use) => {
        const managePage = new ManagePage(page);
        await use(managePage);
    }   
});

export { expect } from '@playwright/test';