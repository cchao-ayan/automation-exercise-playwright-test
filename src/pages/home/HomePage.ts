import { BasePage } from '../base/BasePage';
import { locators } from './HomePageLocators';

export class HomePage extends BasePage {
  async ready() {
    // ensure we are on the home page before performing checks
    await this.verifyHomePageUrl('https://automationexercise.com/');
    await this.header.verifyLogoIsVisible();
  }

  async navigateToHomePage(url: string) {
    await this.goToUrl(url);
  }

  async verifyHomePageUrl(expectedUrl: string) {
    // navigate to the home page if not already there
    await this.goToUrl(expectedUrl);
    await this.expectUrl(expectedUrl);
  }

  async verifySliderIsVisible() {
    await this.expectVisible(locators.sliderCarousel(this.page));
  }

  async loggedInUserLandingPage() {
    await this.ready();
    await this.header.verifyDeleteButtonIsVisible();
    await this.header.verifyLogoutButtonIsVisible();
    await this.header.verifyLoggedInUser();
  }

  async verifyRecommendedItemsSectionIsVisible() {
    const recommendedItemsHeading = locators.recommendedItemsHeading(this.page);
    await this.expectVisible(recommendedItemsHeading);
    await this.expectHaveText(recommendedItemsHeading, 'Recommended Items');
  }
}
