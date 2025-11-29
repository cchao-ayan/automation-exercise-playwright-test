import { Page } from '@playwright/test';

export const locators = {
    homePageUrl: 'https://automationexercise.com/',
    logoImage: '//img[@alt="Website for automation practice"]'
};

export const playwrightLocators = {
    //logoImage:              (page: Page) => page.getByRole('img', { name: 'Website for practice automation' }),
    signupLoginLink:        (page: Page) => page.getByRole('link', { name: 'Signup / Login' }),
}
