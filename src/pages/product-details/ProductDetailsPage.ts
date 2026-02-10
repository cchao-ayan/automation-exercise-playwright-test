import { locators } from './ProductDetailsLocators';
import { BasePage } from '../base/BasePage';
import  {testData } from '../products/ProductsTestData';
import { expect } from '@playwright/test';

export class ProductDetailsPage extends BasePage {
    async ready(){
        await this.verifyUrlIsCorrect(testData.featured_item1.url);
        await this.verifyAddToCartButtonIsVisible();
        await this.verifyReviewSectionIsVisible();
        await this.verifySubmitButtonIsVisible();
    }
    async verifyUrlIsCorrect(detailPageUrl: string) {
        expect.poll(async () => this.page.url().includes(detailPageUrl));
    }
    async verifyAddToCartButtonIsVisible() {
        await this.expectVisible(locators.addToCartButton(this.page));
    }
    async verifyReviewSectionIsVisible() {
        await this.expectVisible(locators.reviewSection(this.page));
    }
    async clickAddToCartButton() {
        await this.click(locators.addToCartButton(this.page));
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
}
 