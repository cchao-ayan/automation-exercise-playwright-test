import { Page } from '@playwright/test';
import { LoginPage } from '../login/LoginPage';
import { HomePage } from '../home/HomePage';
import { SignUpPage } from '../signup/SignUpPage';
import { AccountCreatedPage } from '../account-created/AccountCreatedPage';
import { AccountDeletedPage } from '../account-deleted/AccountDeletedPage';
import { ContactUsPage } from '../contact-us/ContactUsPage';
import { TestCasePage } from '../testcases/TestCasesPage';
import { ProductsPage } from '../products/ProductsPage';
import { ProductDetailsPage } from '../product-details/ProductDetailsPage';
// Header/Footer are provided by pages via BasePage lazy getters

export class POManager {
  constructor(private readonly page: Page) {}

  // unidenfied pages
  private _login?: LoginPage;
  private _home?: HomePage;
  private _signUp?: SignUpPage;
  private _accountCreated?: AccountCreatedPage;
  private _accountDeleted?: AccountDeletedPage;
  private _contactUs?: ContactUsPage;
  private _testCase?: TestCasePage;
  private _products?: ProductsPage;
  private _productDetails?: ProductDetailsPage;

  // if this._login is undefined, create a new LoginPage instance and assign it to this._login else return this._login
  get loginPage(): LoginPage {
    return (this._login ??= new LoginPage(this.page));
  }
  get homePage(): HomePage {
    return (this._home ??= new HomePage(this.page));
  }
  get signUpPage(): SignUpPage {
    return (this._signUp ??= new SignUpPage(this.page));
  }
  get accountCreatedPage(): AccountCreatedPage {
    return (this._accountCreated ??= new AccountCreatedPage(this.page));
  }
  get accountDeletedPage(): AccountDeletedPage {
    return (this._accountDeleted ??= new AccountDeletedPage(this.page));
  }
  get contactUsPage(): ContactUsPage {
    return (this._contactUs ??= new ContactUsPage(this.page));
  }
  get TestCasesPage(): TestCasePage {
    return (this._testCase ??= new TestCasePage(this.page));
  }
  get productsPage(): ProductsPage {
    return (this._products ??= new ProductsPage(this.page));
  }
  get productsDetails(): ProductDetailsPage {
    return (this._productDetails ??= new ProductDetailsPage(this.page));
  }
  // header/footer removed from POManager - now provided by pages via BasePage lazy getters
}
