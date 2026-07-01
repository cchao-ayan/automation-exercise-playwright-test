import { Locator, expect } from '@playwright/test';

export class HeaderComponent {
  constructor(protected readonly root: Locator) { }
  // ======================
  // Locators
  // ======================
  private readonly logoLink = this.root.getByRole('link', { name: 'Website for practice' });
  private readonly homeLink = this.root.getByRole('link', { name: 'Home' });
  private readonly productsLink = this.root.getByRole('link', { name: 'Products' });
  private readonly cartLink = this.root.getByRole('link', { name: 'Cart' });
  private readonly signupLoginLink = this.root.getByRole('link', { name: 'Signup / Login' });
  private readonly testCaseLink = this.root.getByRole('link', { name: 'Test Cases' });
  private readonly apiTestingLink = this.root.getByRole('link', { name: 'API Testing' });
  private readonly videoTutorialLink = this.root.getByRole('link', { name: 'Video Tutorials' });
  private readonly contactUsLink = this.root.getByRole('link', { name: 'Contact us' });
  private readonly deleteAccountLink = this.root.getByRole('link', { name: 'Delete Account' });
  private readonly logoutLink = this.root.getByRole('link', { name: 'Logout' });
  private readonly logoImage = this.root.locator('img[src*="/home/logo.png"]');
  private readonly loggedInAsText = this.root.getByText('Logged in as');

  // ======================
  // State methods
  // ======================
  public async expectLogoLoaded(): Promise<void> {
    const logo = this.logoImage;
    await expect(logo).toBeVisible();
    await expect
      .poll(async () => {
        return logo.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0);
      })
      .toBe(true);
  }

  public async successfulLogin(username: string): Promise<void> {
    await this.expectLogoLoaded();
    await expect(this.logoutLink).toBeVisible();
    await expect(this.signupLoginLink).not.toBeVisible();
    await expect(this.loggedInAsText).toHaveText(
      new RegExp(`logged in as ${username}`, 'i'),
    ); // Case-insensitive match for "Logged in as [username]"
  }
  public async successfulLogout(): Promise<void> {
    await this.expectLogoLoaded();
    await expect(this.signupLoginLink).toBeVisible();
    await expect(this.logoutLink).not.toBeVisible();
    await expect(this.loggedInAsText).not.toBeVisible();
  }

  // ======================
  // Action methods
  // ======================
  public async clickSignupLoginLink(): Promise<void> {
    await this.signupLoginLink.click();
  }
  public async clickLogoLink(): Promise<void> {
    await this.logoLink.click();
  }
  public async clickHomeLink(): Promise<void> {
    await this.homeLink.click();
  }
  public async clickProductsLink(): Promise<void> {
    await this.productsLink.click();
  }
  public async clickCartLink(): Promise<void> {
    await this.cartLink.click();
  }
  public async clickTestCasesLink(): Promise<void> {
    await this.testCaseLink.click();
  }
  public async clickAPITestingLink(): Promise<void> {
    await this.apiTestingLink.click();
  }
  public async clickVideoTutorialsLink(): Promise<void> {
    await this.videoTutorialLink.click();
  }
  public async clickContactUsLink(): Promise<void> {
    await this.contactUsLink.click();
  }
  public async clickDeleteAccountLink(): Promise<void> {
    await this.deleteAccountLink.click();
  }
  public async clickLogoutLink(): Promise<void> {
    await this.logoutLink.click();
  }
}
