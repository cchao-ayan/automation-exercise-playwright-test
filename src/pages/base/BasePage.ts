import { Page, Locator, expect } from '@playwright/test';
import { Footer } from '../common/footer/Footer';
import { Header } from '../common/header/Header';
import { CommonPageMethods } from './CommonPageMethod';

export abstract class BasePage extends CommonPageMethods{
    private _footer?: Footer;
    private _header?: Header;

    constructor(protected page: Page) { 
        super(page);
    }

    // lazy getter for footer and header instances, created only when accessed
    // pom.homePage.footer instead of pom.footer which is much better for clarity
    // footer and header lazy getters have been separated from POManager so that each page can have its own header/footer instance if needed
    get footer(): Footer { return this._footer ??= new Footer(this.page); }
    get header(): Header { return this._header ??= new Header(this.page); }

    protected async goToUrl(url: string) {
        await this.page.goto(url);
    }

}
