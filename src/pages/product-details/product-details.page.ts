import { ProductDetailsLocators } from './product-details.locators';
import { BasePage } from '../base/base.page';
import { products } from '/test-data';
import { Page, expect } from '@playwright/test';
import { ProductDetailsModel } from '/models/product-detail.model';
import { compareByKey, normalizeProductData } from '../../utils';
import { routes } from '/config/routes';

export class ProductDetailsPage extends BasePage {
    private readonly locators: ProductDetailsLocators;

    constructor(protected readonly page: Page) {
        super(page);
        this.locators = new ProductDetailsLocators(this.page);
    }
    public async assertPageLoaded(index: number): Promise<void> {
        await expect(this.page).toHaveURL(new RegExp(`${routes.productDetails}${index}$`));
        await expect(this.locators.addToCartButton).toBeVisible();
        await expect(this.locators.reviewSection).toBeVisible();
        await expect(this.locators.submitButton).toBeVisible();
    }
    // ---------- Getters ----------
    public async productID(): Promise<string | null> {
        return await this.locators.productID.getAttribute('value');
    }
    public async productName(): Promise<string> {
        return await this.locators.productName.innerText();
    }
    public async productPrice(): Promise<string> {
        return await this.locators.productPrice.first().innerText();
    }
    public async productBrand(): Promise<string> {
        const brand = await this.locators.productBrand.innerText();
        return brand.replace('Brand: ', '').trim();
    }
    public async productCategory(): Promise<string> {
        const text = await this.locators.productCategory.innerText();
        const removeCategoryText = text.replace('Category: ', '').trim();
        return removeCategoryText.split(' > ')[1];
    }
    public async productUsertype(): Promise<string> {
        const text = await this.locators.productCategory.innerText();
        const removeCategoryText = text.replace('Category: ', '').trim();
        return removeCategoryText.split(' > ')[0];
    }
    // ---------- Methods ----------
    public async clickAddToCartButton() {
        await this.locators.addToCartButton.click();
    }
    public async clickReviewSection() {
        await this.locators.reviewSection.click();
    }
    public async clickSubmitButton() {
        await this.locators.submitButton.click();
    }
    // ---------- Helpers ----------
    public async compareProductDetailsWithTestData(index: number): Promise<void> {
        const actual = await this.readCardDetailsFromUI();
        const expected = normalizeProductData(products[index]);
        compareByKey(actual, expected, ['id', 'name', 'price', 'brand', 'usertype', 'category']);
    }
    // ---------- DTO Transformation Helpers ----------
    private async readCardDetailsFromUI(): Promise<ProductDetailsModel> {
        return {
            id: await this.productID(),
            name: await this.productName(),
            price: await this.productPrice(),
            brand: await this.productBrand(),
            usertype: await this.productUsertype(),
            category: await this.productCategory()
        };
    }
}
