import { Page, Locator, expect } from '@playwright/test';
import { Footer } from '../common/footer/Footer';
import { Header } from '../common/header/Header';

export abstract class BasePage {
    readonly footer: Footer;
    readonly header: Header;

    constructor(protected page: Page) { 
        this.page = page;
        this.footer = new Footer(page);
        this.header = new Header(page);
        }

    protected async goToUrl(url: string) {
        await this.page.goto(url);
    }

    protected async basePageClick(selector: Locator | string) {
        await this.toLocator(selector).click();
    }

    protected async basePageFill(selector: Locator | string, value: string) {
        await this.toLocator(selector).fill(value);
    }

    protected async basePageExpectToBeVisible(selector: Locator | string) {
        await expect(this.toLocator(selector)).toBeVisible();
    }

    protected async basePageExpectToHaveText(selector: Locator | string, text: string) {
        await expect(this.toLocator(selector)).toHaveText(text);
    }

    protected async basePageExpectToHaveURL(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    protected async basePageToHaveScreenshot(selector: Locator | string, path: string) {
        await expect(this.toLocator(selector)).toHaveScreenshot(path);
    }

    protected async basePageSelectFromDropdownByValue(selector: Locator | string, value: string) {
        await this.toLocator(selector).selectOption({ value: value });
    }

    protected async basePageCheckCheckbox(selector: Locator | string) {
        await this.toLocator(selector).check();
    }

    protected async basePageUncheckCheckbox(selector: Locator | string) {
        await this.toLocator(selector).uncheck();
    }

    protected async basePageRadioButtonSelect(selector: Locator | string) {
        await this.toLocator(selector).check();
    }

    // this will convert string selectors to Locator objects
    protected toLocator(selector: string | Locator): Locator {
        return typeof selector === 'string'
            ? this.page.locator(selector)   // string → Locator
            : selector;                     // already a Locator
    }
}
