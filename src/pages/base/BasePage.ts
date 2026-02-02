import { Page } from "@playwright/test";
import { Footer } from "../common/footer/Footer";
import { Header } from "../common/header/Header";
import { CommonPageMethods } from "./CommonPageMethod";
import { AdHandler } from "../../utilities/ads-handler";

export abstract class BasePage extends CommonPageMethods {
  private _footer?: Footer;
  private _header?: Header;
  private readonly adHandler: AdHandler;

  constructor(protected page: Page) {
    super(page);
    this.adHandler = new AdHandler(this.page);
  }

  // lazy getter for footer and header instances, created only when accessed
  // pom.homePage.footer instead of pom.footer which is much better for clarity
  // footer and header lazy getters have been separated from POManager so that each page can have its own header/footer instance if needed
  get footer(): Footer {
    return (this._footer ??= new Footer(this.page));
  }
  get header(): Header {
    return (this._header ??= new Header(this.page));
  }

  /**
   * Wait for page to reach domcontentloaded state.
   */
  protected async ready(timeout = 60000): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded", { timeout });
  }

  /**
   * Navigate to URL with ad handlers registered.
   */
  protected async goToUrl(url: string): Promise<void> {
    await this.adHandler.registerAutoCloseHandlers();
    await this.page.goto(url);
    //await this.ready();
  }
}
