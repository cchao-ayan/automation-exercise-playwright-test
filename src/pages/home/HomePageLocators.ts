import { Page } from '@playwright/test';

export const locators = {
    sliderCarousel: (page: Page) => page.locator('#slider-carousel'),
}
