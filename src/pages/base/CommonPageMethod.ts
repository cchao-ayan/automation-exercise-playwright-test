import { Page, Locator, expect } from "playwright/test";

export class CommonPageMethods {

    constructor(protected page: Page) {
        this.page = page;
    }

    async click(selector: string | Locator) {
        await this.toLocator(selector).click();
    }

    async fill(selector: string | Locator, value: string) {
        await this.toLocator(selector).fill(value);
    }

    async expectVisible(selector: string | Locator) {
        await expect(this.toLocator(selector)).toBeVisible();
    }

    async expectHasText(selector: string | Locator, text: string) {
        await expect(this.toLocator(selector)).toHaveText(text);
    }

    async expectUrl(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    async expectScreenshot(selector: string | Locator, path: string) {
        await expect(this.toLocator(selector)).toHaveScreenshot(path);
    }

    async selectByValue(selector: string | Locator, value: string) {
        await this.toLocator(selector).selectOption({ value: value });
    }

    async check(selector: string | Locator) {
        await this.toLocator(selector).check();
    }

    async uncheck(selector: string | Locator) {
        await this.toLocator(selector).uncheck();
    }

    async selectRadio(selector: string | Locator) {
        await this.toLocator(selector).check();
    }

    protected toLocator(selector: string | Locator): Locator {
        return typeof selector === 'string'
            ? this.page.locator(selector)   // string → Locator
            : selector;                     // already a Locator
    }
}