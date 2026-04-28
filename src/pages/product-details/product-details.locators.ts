import { Page } from '@playwright/test';

export class ProductDetailsLocators {
    constructor(private readonly page: Page){}

    // root Locator
    readonly productInfo = this.page.locator('div.product-information'); 
    // component of productInfo locator
    readonly productID = this.productInfo.locator('#product_id');
    readonly productName = this.productInfo.locator('h2').first();
    readonly productPrice = this.productInfo.getByText('Rs.');
    readonly productBrand = this.productInfo.locator('p').last();
    readonly productCategory = this.productInfo.locator('p').first();
    readonly addToCartButton = this.productInfo.getByRole('button', { name: 'Add to cart' });
    readonly productImage = this.productInfo.locator('img').first();
    readonly viewProductButton = this.productInfo.getByRole('link', { name: 'View Product' });
    readonly productRating = this.productInfo.locator('img').nth(2);
    readonly productQuantiyLabel = this.productInfo.getByText('Quantity:');
    readonly productQuantity = this.productInfo.locator('#quantity');
    readonly productAvailability = this.productInfo.getByText('Availability:');
    readonly productCondition = this.productInfo.getByText('Condition:');

    // other locators
    readonly newIcon = this.page.getByRole('img', { name: 'ecommerce website products' }).nth(1);
    readonly submitButton = this.page.getByRole('button', { name: 'Submit' });
    readonly reviewSection = this.page.getByText('Write Your Review');
    readonly reviewNameInput = this.page.getByPlaceholder('Your Name');
    readonly reviewEmailInput = this.page.getByPlaceholder('Email Address');
    readonly reviewTextInput = this.page.getByPlaceholder('Your Review');

}
