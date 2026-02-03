import { Page, Locator, expect } from 'playwright/test';

export class CommonPageMethods {
  constructor(protected page: Page) {
    this.page = page;
  }

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

  protected async expectToBe(actual: any, expected: any) {
    expect(actual).toBe(expected);
  }

  protected async expectUrl(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  protected async expectToBeGreaterThan(count: number) {
    expect(count).toBeGreaterThan(0);
  }

  protected async expectScreenshot(selector: string | Locator, path: string) {
    await expect(this.toLocator(selector)).toHaveScreenshot(path);
  }

  protected async expectEquals(selector: string | Locator, expectedValue: string) {
    const actual = await this.toLocator(selector).getAttribute('value');
    console.log(`Actual value: ${actual}, Expected value: ${expectedValue}`);
    expect(actual).toBe(expectedValue);
  }

  protected async selectByValue(selector: string | Locator, value: string) {
    try {
      await this.toLocator(selector).selectOption({ label: value });
    } catch (error) {
      console.error(`The '${value}' is not in the list of values`, selector, error);
    }
  }

  protected async check(selector: string | Locator) {
    await this.toLocator(selector).check();
  }

  protected async uncheck(selector: string | Locator) {
    await this.toLocator(selector).uncheck();
  }

  protected async selectRadio(selector: string | Locator) {
    await this.toLocator(selector).check();
  }

  /**
   * Get inner text from a locator.
   * @param selector - CSS selector (string) or Locator object
   * @param optional - If true, returns empty string on error; if false, throws error
   * @returns Promise resolving to inner text or empty string (if optional)
   */
  protected async getInnerText(
    selector: string | Locator,
    optional: boolean = false,
  ): Promise<string> {
    try {
      return await this.toLocator(selector).innerText();
    } catch (error) {
      if (optional) {
        return '';
      }
      throw error;
    }
  }

  // Helper method to convert string selectors to Locator objects
  protected toLocator(selector: string | Locator): Locator {
    return typeof selector === 'string'
      ? this.page.locator(selector) // string → Locator
      : selector; // already a Locator
  }
}
