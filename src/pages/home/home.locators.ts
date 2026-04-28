import { Page } from '@playwright/test';

export class HomeLocators {
    constructor (private readonly page: Page){}

    readonly recommendedListHeading = this.page.getByRole('heading', { name: 'Recommended Items' }); 
    readonly categoryHeading = this.page.getByRole('heading', { name: 'Category' }); 
    readonly featuresItemsHeadin = this.page.getByRole('heading', { name: 'Features Items' }); 
    readonly brandsHeading = this.page.getByRole('heading', { name: 'Brands' }); 
    readonly slider = this.page.locator('#slider');
}