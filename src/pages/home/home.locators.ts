import { Page } from '@playwright/test';

export const HOME = (page: Page) => ({
    heading(name: string) { 
        return page.getByRole('heading', { name }); 
    },
    slider: page.locator('#slider')
});