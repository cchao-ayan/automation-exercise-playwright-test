import { Page } from '@playwright/test';

export const locators = {
  sliderCarousel: (page: Page) => page.locator('#slider-carousel'),
  recommendedItemsHeading: (page: Page) =>
    page.getByRole('heading', { name: 'Recommended Items', level: 2 }),
};
