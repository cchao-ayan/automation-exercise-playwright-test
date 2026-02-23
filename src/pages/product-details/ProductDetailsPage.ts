import { locators } from './ProductDetailsLocators';
import { BasePage } from '../../pages';
import { Locator } from '@playwright/test';

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

    }
}
