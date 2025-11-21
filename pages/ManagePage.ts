import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage/LoginPage";
import { HomePage } from "./HomePage/HomePage";

export class ManagePage {
    constructor(private readonly page: Page) {}

    // unidenfied pages
    private _login ?: LoginPage;
    private _home ?: HomePage;

    // if this._login is undefined, create a new LoginPage instance and assign it to this._login else return this._login
    get loginPage(): LoginPage { return this._login ??= new LoginPage(this.page); }
    get homePage(): HomePage { return this._home ??= new HomePage(this.page); }
}

