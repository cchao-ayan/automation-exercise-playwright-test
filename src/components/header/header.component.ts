import { Locator, expect } from '@playwright/test';
import { HEADER_LOCATORS } from '@/components/header/header.locators'
import { resolve, LocatorFactory } from '@/base/locator';

export class HeaderComponent {
  private readonly factory: LocatorFactory;

  constructor(private readonly root: Locator) {
    this.factory = new LocatorFactory(root);
  }

  // ======================
  // Locators are located at ./header.locators.ts in a form of key/values
  // ======================

  // ======================
  // State methods
  // ======================
  public async expectLogoLoaded(): Promise<void> {
    const logo = resolve(this.root, HEADER_LOCATORS.image.logo);
    await expect(logo).toBeVisible();
    await expect
      .poll(async () => {
        return resolve(this.root, HEADER_LOCATORS.image.logo).evaluate(
          (img: HTMLImageElement) =>
            img.complete && img.naturalWidth > 0
        );
      })
      .toBe(true);
  }

  public async expectSuccessfulLogin(username: string): Promise<void> {
    await this.expectLogoLoaded();
    await expect(this.factory.create(HEADER_LOCATORS.link.logout)).toBeVisible();
    await expect(this.factory.create(HEADER_LOCATORS.link.signup_login)).not.toBeVisible();
    await expect(this.factory.create(HEADER_LOCATORS.text.logged_in_as)).toHaveText(`Logged in as ${username}`);
  }
}
