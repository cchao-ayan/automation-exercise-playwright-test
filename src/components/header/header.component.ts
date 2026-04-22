import { Locator, expect } from '@playwright/test';
import { HEADER_LOCATORS } from '../../components/header/header.locators'

export class HeaderComponent {
  private readonly headerLocator;

  constructor(private readonly root: Locator) {
    this.headerLocator = HEADER_LOCATORS(root);
  }

  // ======================
  // State methods
  // ======================
  public async expectLogoLoaded(): Promise<void> {
    const logo = this.headerLocator.image.logo;
    await expect(logo).toBeVisible();
    await expect
      .poll(async () => {
        return logo.evaluate(
          (img: HTMLImageElement) =>
            img.complete && img.naturalWidth > 0
        );
      })
      .toBe(true);
  }

  public async expectSuccessfulLogin(username: string): Promise<void> {
    await this.expectLogoLoaded();
    await expect(this.headerLocator.link.logout).toBeVisible();
    await expect(this.headerLocator.link.signup_login).not.toBeVisible();
    await expect(this.headerLocator.text.logged_in_as).toHaveText(`Logged in as ${username}`);
  }
  public async verifyThatUserIsLoggedOut(): Promise<void> {
    await this.expectLogoLoaded();
    await expect(this.headerLocator.link.signup_login).toBeVisible();
    await expect(this.headerLocator.link.logout).not.toBeVisible();
    await expect(this.headerLocator.text.logged_in_as).not.toBeVisible();
  }
  public async clickSignupLoginLink(): Promise<void> {
    await this.headerLocator.link.signup_login.click();
  }
  public async clickLogoLink(): Promise<void> {
    await this.headerLocator.link.logo.click();
  }
  public async clickHomeLink(): Promise<void> {
    await this.headerLocator.link.home.click();
  }
  public async clickProductsLink(): Promise<void> {
    await this.headerLocator.link.products.click();
  }
  public async clickCartLink(): Promise<void> {
    await this.headerLocator.link.cart.click();
  }
  public async clickTestCasesLink(): Promise<void> {
    await this.headerLocator.link.test_case.click();
  }
  public async clickAPITestingLink(): Promise<void> {
    await this.headerLocator.link.api_testing.click();
  }
  public async clickVideoTutorialsLink(): Promise<void> {
    await this.headerLocator.link.video_tutorial.click();
  }
  public async clickContactUsLink(): Promise<void> {
    await this.headerLocator.link.contact_us.click();
  }
  public async clickDeleteAccountLink(): Promise<void> {
    await this.headerLocator.link.delete_account.click();
  }
  public async clickLogoutLink(): Promise<void> {
    await this.headerLocator.link.logout.click();
  }
}
