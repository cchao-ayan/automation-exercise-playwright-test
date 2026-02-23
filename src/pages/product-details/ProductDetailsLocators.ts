import { Page, Locator } from '@playwright/test';

export const locators = {
    productInfo: (page: Page) => page.locator('div.product-information'),
    productID: (root: Locator): Locator => root.locator('a').first(),
    productName: (root: Locator): Locator => root.locator('p').first(),
    productPrice: (root: Locator): Locator => root.getByText('Rs.'),
    addToCartButton: (root: Locator): Locator => root.getByRole('button', { name: 'Add to cart' }),
    productImage: (root: Locator): Locator => root.locator('img').first(),
    viewProductButton: (root: Locator): Locator => root.getByRole('link', { name: 'View Product' }),
    productBrand: (root: Locator): Locator => root.getByText('Brand:'),
    productCategory: (root: Locator): Locator => root.locator('p').nth(1),
    productRating: (root: Locator): Locator => root.locator('img').nth(2),
    productQuantiyLabel: (root: Locator): Locator => root.getByText('Quantity:'),
    productQuantity: (root: Locator): Locator => root.locator('#quantity'),
    productAvailability: (root: Locator): Locator => root.getByText('Availability:'),
    productCondition: (root: Locator): Locator => root.getByText('Condition:'),
    newIcon: (page: Page) => page.getByRole('img', { name: 'ecommerce website products' }).nth(1),
    submitButton: (page: Page) => page.getByRole('button', { name: 'Submit' }),
    reviewSection: (page: Page) => page.getByText('Write Your Review'),
    reviewNameInput: (page: Page) => page.getByPlaceholder('Your Name'),
    reviewEmailInput: (page: Page) => page.getByPlaceholder('Email Address'),
    reviewTextInput: (page: Page) => page.getByPlaceholder('Your Review')
}
