import { locators } from './ProductDetailsLocators';
import { BasePage } from '../../pages';
import { products } from '../../test-data';
import { Locator } from '@playwright/test';
import { ProductDetailsDTO } from '../../dto/ProductDetails.dto';
import { compareByKey, normalizeProductData } from '../../utilities';

export class ProductDetailsPage extends BasePage {
    async ready(expectedUrl: string) {
        await this.verifyUrlIsCorrect(expectedUrl);
        await this.verifyAddToCartButtonIsVisible();
        await this.verifyReviewSectionIsVisible();
        await this.verifySubmitButtonIsVisible();
    }
    // Helper to get the root locator for product details page
    getRootLocator(): Locator {
        return locators.productInfo(this.page);
    }
    // ---------- Getters ----------
    async getProductID(root: Locator): Promise<string | null> {
        return await locators.productID(root).getAttribute('value');
    }
    async getProductName(root: Locator): Promise<string> {
        return await locators.productName(root).innerText();
    }
    async getProductPrice(root: Locator): Promise<string> {
        return await locators.productPrice(root).first().innerText();
    }
    async getProductBrand(root: Locator): Promise<string> {
        const brand = await locators.productBrand(root).innerText();
        return brand.replace('Brand: ', '').trim();
    }
    async getProductCategory(root: Locator): Promise<string> {
        const text = await locators.productCategory(root).innerText();
        const removeCategoryText = text.replace('Category: ', '').trim();
        return removeCategoryText.split(' > ')[1];
    }
    async getProductUsertype(root: Locator): Promise<string> {
        const text = await locators.productCategory(root).innerText();
        const removeCategoryText = text.replace('Category: ', '').trim();
        return removeCategoryText.split(' > ')[0];
    }
    /**
     * verify the url contains the supplied string; used to check for the product id
     */
    async verifyUrlContains(expectedSubstring: string) {
        await this.expectUrlToContain(expectedSubstring);
    }
    async verifyUrlIsCorrect(expectedUrl: string) {
        await this.expectUrl(expectedUrl);
    }
    async verifyAddToCartButtonIsVisible() {
        await this.expectVisible(locators.addToCartButton(this.getRootLocator()));
    }
    async verifyReviewSectionIsVisible() {
        await this.expectVisible(locators.reviewSection(this.page));
    }
    async clickAddToCartButton() {
        await this.click(locators.addToCartButton(this.getRootLocator()));
    }
    async clickReviewSection() {
        await this.click(locators.reviewSection(this.page));
    }
    async verifySubmitButtonIsVisible() {
        await this.expectVisible(locators.submitButton(this.page));
    }
    async clickSubmitButton() {
        await this.click(locators.submitButton(this.page));
    }
    async compareProductDetailsWithTestData(index: number): Promise<void> {
        const actual = await this.readCardDetailsFromRoot(this.getRootLocator());
        const expected = normalizeProductData(products[index]);
        compareByKey(actual, expected, ['id', 'name', 'price', 'brand', 'usertype', 'category']);
    }
    // ---------- DTO Transformation Helpers ----------
    private async readCardDetailsFromRoot(root: Locator): Promise<ProductDetailsDTO> {
        return {
            id: await this.getProductID(root),
            name: await this.getProductName(root),
            price: await this.getProductPrice(root),
            brand: await this.getProductBrand(root),
            usertype: await this.getProductUsertype(root),
            category: await this.getProductCategory(root)
        };
    }
}
