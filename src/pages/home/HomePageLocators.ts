import { Page } from '@playwright/test';

export const locators = {
    homePageUrl: 'https://automationexercise.com/'
};

export const playwrightLocators = {
    signupLoginLink:        (page: Page) => page.getByRole('link', { name: 'Signup / Login' }),
}
