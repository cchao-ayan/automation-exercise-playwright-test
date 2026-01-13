import { Page, Locator } from "playwright/test";

export class CommonPageMethods {

    constructor(protected page: Page) {
        this.page = page;
    }

    async commonPageClick(selector: string | Locator) {
        await this.toLocator(selector).click();
    }


    // this will convert string selectors to Locator objects
    protected toLocator(selector: string | Locator): Locator {
        return typeof selector === 'string'
            ? this.page.locator(selector)   // string → Locator
            : selector;                     // already a Locator
    }
}