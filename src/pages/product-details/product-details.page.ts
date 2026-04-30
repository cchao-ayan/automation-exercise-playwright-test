import { ProductDetailsLocators } from './product-details.locators';
import { BasePage } from '../base/base.page';
import { products } from '/test-data';
import { Locator, Page, expect } from '@playwright/test';
import { ProductDetailsDTO } from '/models/product-detail.model';
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
    async getProductID(): Promise<string | null> {
        return await this.locators.productID.getAttribute('value');
    }
    async getProductName(): Promise<string> {
        return await this.locators.productName.innerText();
    }
    async getProductPrice(): Promise<string> {
        return await this.locators.productPrice.first().innerText();
    }
    async getProductBrand(): Promise<string> {
        const brand = await this.locators.productBrand.innerText();
        return brand.replace('Brand: ', '').trim();
    }
    async getProductCategory(): Promise<string> {
        const text = await this.locators.productCategory.innerText();
        const removeCategoryText = text.replace('Category: ', '').trim();
        return removeCategoryText.split(' > ')[1];
    }
    async getProductUsertype(): Promise<string> {
        const text = await this.locators.productCategory.innerText();
        const removeCategoryText = text.replace('Category: ', '').trim();
        return removeCategoryText.split(' > ')[0];
    }
    // ---------- Methods ----------
    async clickAddToCartButton() {
        await this.locators.addToCartButton.click();
    }
    async clickReviewSection() {
        await this.locators.reviewSection.click();
    }
    async clickSubmitButton() {
        await this.locators.submitButton.click();
    }
    // ---------- Helpers ----------
    async compareProductDetailsWithTestData(index: number): Promise<void> {
        const actual = await this.readCardDetailsFromRoot();
        const expected = normalizeProductData(products[index]);
        compareByKey(actual, expected, ['id', 'name', 'price', 'brand', 'usertype', 'category']);
    }
    // ---------- DTO Transformation Helpers ----------
    private async readCardDetailsFromRoot(): Promise<ProductDetailsDTO> {
        return {
            id: await this.getProductID(),
            name: await this.getProductName(),
            price: await this.getProductPrice(),
            brand: await this.getProductBrand(),
            usertype: await this.getProductUsertype(),
            category: await this.getProductCategory()
        };
    }
}
