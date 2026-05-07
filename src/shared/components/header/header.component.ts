import { Locator, expect } from '@playwright/test';
import { HeaderLocators } from './header.locators';

export class HeaderComponent {
  private readonly locator: HeaderLocators;

  constructor(private readonly root: Locator) {
    this.locator = new HeaderLocators(root);
  }

  // ======================
  // State methods
  // ======================
  public async expectLogoLoaded(): Promise<void> {
    const logo = this.locator.logoImage;
    await expect(logo).toBeVisible();
    await expect
      .poll(async () => {
        return logo.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0);
      })
      .toBe(true);
  }

  public async successfulLogin(username: string): Promise<void> {
    await this.expectLogoLoaded();
    await expect(this.locator.logoutLink).toBeVisible();
    await expect(this.locator.signupLoginLink).not.toBeVisible();
    await expect(this.locator.loggedInAsText).toHaveText(
      new RegExp(`logged in as ${username}`, 'i'),
    ); // Case-insensitive match for "Logged in as [username]"
  }
  public async successfulLogout(): Promise<void> {
    await this.expectLogoLoaded();
    await expect(this.locator.signupLoginLink).toBeVisible();
    await expect(this.locator.logoutLink).not.toBeVisible();
    await expect(this.locator.loggedInAsText).not.toBeVisible();
  }

  // ======================
  // Action methods
  // ======================
  public async clickSignupLoginLink(): Promise<void> {
    await this.locator.signupLoginLink.click();
  }
  public async clickLogoLink(): Promise<void> {
    await this.locator.logoLink.click();
  }
  public async clickHomeLink(): Promise<void> {
    await this.locator.homeLink.click();
  }
  public async clickProductsLink(): Promise<void> {
    await this.locator.productsLink.click();
  }
  public async clickCartLink(): Promise<void> {
    await this.locator.cartLink.click();
  }
  public async clickTestCasesLink(): Promise<void> {
    await this.locator.testCaseLink.click();
  }
  public async clickAPITestingLink(): Promise<void> {
    await this.locator.apiTestingLink.click();
  }
  public async clickVideoTutorialsLink(): Promise<void> {
    await this.locator.videoTutorialLink.click();
  }
  public async clickContactUsLink(): Promise<void> {
    await this.locator.contactUsLink.click();
  }
  public async clickDeleteAccountLink(): Promise<void> {
    await this.locator.deleteAccountLink.click();
  }
  public async clickLogoutLink(): Promise<void> {
    await this.locator.logoutLink.click();
  }
}
