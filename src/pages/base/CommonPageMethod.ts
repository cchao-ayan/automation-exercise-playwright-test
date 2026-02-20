import { Page, Locator, expect } from 'playwright/test';

export class CommonPageMethods {
  constructor(protected page: Page) {
    this.page = page;
  }
  // Common methods for interacting with page elements using playwright locators and assertion.. moved generic assertion to test
  protected async click(selector: string | Locator) {
    await this.toLocator(selector).click();
  }
  protected async fill(selector: string | Locator, value: string) {
    await this.toLocator(selector).fill(value);
  }
  protected async expectVisible(selector: string | Locator) {
    await expect(this.toLocator(selector)).toBeVisible();
  }
  protected async expectEnabled(selector: string | Locator) {
    await expect(this.toLocator(selector)).toBeEnabled();
  }
  protected async expectNotVisible(selector: string | Locator) {
    await expect(this.toLocator(selector)).not.toBeVisible();
  }
  protected async expectHaveText(selector: string | Locator, text: string) {
    await expect(this.toLocator(selector)).toHaveText(text);
  }
  protected async expectUrl(url: string) {
    await expect(this.page).toHaveURL(url);
  }
  protected async expectScreenshot(selector: string | Locator, path: string) {
    await expect(this.toLocator(selector)).toHaveScreenshot(path);
  }
  protected async expectAttributeValue(selector: string | Locator, attribute: string, value: string) {
    await expect(this.toLocator(selector)).toHaveAttribute(attribute, value);
  }
  protected async selectByValue(selector: string | Locator, value: string) {
      await this.toLocator(selector).selectOption({ label: value });
  }
  protected async check(selector: string | Locator) {
    await this.toLocator(selector).check();
  }
  protected async uncheck(selector: string | Locator) {
    await this.toLocator(selector).uncheck();
  }
  // Helper method to convert string selectors to Locator objects
  protected toLocator(selector: string | Locator): Locator {
    return typeof selector === 'string'
      ? this.page.locator(selector) // string → Locator
      : selector; // already a Locator
  }
}
