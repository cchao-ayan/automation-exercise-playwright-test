import { Page } from '@playwright/test';

export class AdHandler {
  constructor(private readonly page: Page) {}

  /**
   * Registers automatic handlers that close modal / popup ads
   * ONLY when they block an action.
   *
   * Uses Playwright's addLocatorHandler to:
   * - Avoid explicit waits
   * - Keep tests clean
   * - Prevent flaky failures caused by overlays
   */
  async playwrightAdHandler(): Promise<void> {
    // Common selectors used by modal and popup ads
    const closeSelectors = [
      'button:has-text("Close")',
      'button:has-text("×")',
      '.modal-close',
      '.close',
      '[aria-label="Close"]',
    ];

    // Register a handler for each selector
    // Playwright will auto-trigger this ONLY if the locator blocks an action
    for (const selector of closeSelectors) {
      await this.page.addLocatorHandler(this.page.locator(selector), async (locator) => {
        console.log(`Auto-closing popup using selector: ${selector}`);
        await locator.click();
      });
    }
  }

  /**
   * Handles JavaScript dialogs such as:
   * - alert()
   * - confirm()
   * - prompt()
   *
   * These dialogs are NOT DOM elements and cannot be handled by locators
   */
  async handleDialogs(): Promise<void> {
    this.page.on('dialog', async (dialog) => {
      console.log(`Dialog detected: ${dialog.message()}`);
      if (dialog.message().includes('Press OK to proceed!')) {
        console.log('Accepting success dialog');
        await dialog.accept();
        return; // exits the method early.
      }
      await dialog.dismiss();
      console.log('Dialog dismissed');
    });
  }

  /**
   * Handles unexpected popup windows or new browser tabs
   * triggered by ads or third-party links
   */
  async handlePopups(): Promise<void> {
    this.page.on('popup', async (popup) => {
      console.log('Unexpected popup detected — closing it');
      await popup.close();
    });
  }

  /**
   * Preventive approach:
   * Blocks common ad-related network requests before they load
   *
   * This helps reduce:
   * - Flakiness
   * - Page load delays
   * - Unexpected UI overlays
   */
  async blockAds(): Promise<void> {
    await this.page.route('**/*', (route) => {
      const url = route.request().url();

      // Abort requests coming from known ad providers
      if (url.includes('ads') || url.includes('doubleclick') || url.includes('googlesyndication')) {
        console.log(`Blocking ad request: ${url}`);
        route.abort();
      } else {
        route.continue();
      }
    });
  }

  /** Compile the ads handler in one method */
  async registerAutoCloseHandlers(): Promise<void> {
    await this.playwrightAdHandler();
    await this.handleDialogs();
    await this.handlePopups();
    await this.blockAds();
  }
}
