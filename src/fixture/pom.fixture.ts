import {test as base} from '@playwright/test';
import { POManager }  from '../pages/manager/POManager';
import { checkForBrokenLink, checkForBrokenLinks } from '../utilities/broken-links-checker';

type MyFixtures = {
    pom: POManager;
};

export const test = base.extend<MyFixtures>({
    pom: async ({ page} , use) => {
        await use(new POManager(page));
    },    
    
});

export { expect, Page } from '@playwright/test';
export { checkForBrokenLink, checkForBrokenLinks };