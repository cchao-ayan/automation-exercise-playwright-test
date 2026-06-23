import { Page } from '@playwright/test';
import { LoginPage } from '@features/auth/pages/login.page';
import { HomePage } from '@features/home/pages/home.page';
import { SignUpPage } from '@features/auth/pages/signup.page';
import { AccountCreatedPage } from '@features/auth/pages/account-created.page';
import { AccountDeletedPage } from '@features/auth/pages/account-deleted.page';
import { ContactUsPage } from '@features/contact-us/pages/contact-us.page';
import { TestCasePage } from '@features/exercises/pages/test-case.page';
import { ProductsPage } from '@features/products/pages/product.page';
import { ProductDetailsPage } from '@features/products/pages/product-details.page';
import { CartPage } from '@features/cart/pages/view-cart.page';
import { CheckOutPage } from '@features/checkout/pages/checkout.page';
import { PaymentPage } from '@features/checkout/pages/payment.page';
import { PaymentDonePage } from '@features/checkout/pages/payment-done.page';
// Header/Footer are provided by pages via BasePage lazy getters

export class POManager {
  constructor(private readonly page: Page) { }

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
  private _cart?: CartPage;
  private _checkout?: CheckOutPage;
  private _payment?: PaymentPage;
  private _paymentDone?: PaymentDonePage;

  // if this._login is undefined, create a new LoginPage instance and assign it to this._login else return this._login
  public get loginPage(): LoginPage {
    return (this._login ??= new LoginPage(this.page));
  }
  public get homePage(): HomePage {
    return (this._home ??= new HomePage(this.page));
  }
  public get signUpPage(): SignUpPage {
    return (this._signUp ??= new SignUpPage(this.page));
  }
  public get accountCreatedPage(): AccountCreatedPage {
    return (this._accountCreated ??= new AccountCreatedPage(this.page));
  }
  public get accountDeletedPage(): AccountDeletedPage {
    return (this._accountDeleted ??= new AccountDeletedPage(this.page));
  }
  public get contactUsPage(): ContactUsPage {
    return (this._contactUs ??= new ContactUsPage(this.page));
  }
  public get testCasesPage(): TestCasePage {
    return (this._testCase ??= new TestCasePage(this.page));
  }
  public get productsPage(): ProductsPage {
    return (this._products ??= new ProductsPage(this.page));
  }
  public get productDetailsPage(): ProductDetailsPage {
    return (this._productDetails ??= new ProductDetailsPage(this.page));
  }
  public get cartPage(): CartPage {
    return (this._cart ??= new CartPage(this.page));
  }
  public get checkoutPage(): CheckOutPage {
    return (this._checkout ??= new CheckOutPage(this.page));
  }
  public get paymentPage(): PaymentPage {
    return (this._payment ??= new PaymentPage(this.page));
  }
  public get paymentDonePage(): PaymentDonePage {
    return (this._paymentDone ??= new PaymentDonePage(this.page));
  }
  // header/footer removed from POManager - now provided by pages via BasePage lazy getters
}
