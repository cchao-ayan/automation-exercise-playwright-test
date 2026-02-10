import { Page } from '@playwright/test';

export const locators = {
    productImage: (page: Page) => page.getByRole('img', { name: 'ecommerce website products' }).first(),
    newIcon: (page: Page) => page.getByRole('img', { name: 'ecommerce website products' }).nth(1),
    addToCartButton: (page: Page) => page.getByRole('button', { name: 'Add to cart' }),
    reviewSection: (page: Page) => page.getByRole('link', { name: 'Write Your Review' }),
    submitButton: (page: Page) => page.getByRole('button', { name: 'Submit' }),
}
