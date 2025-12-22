import { Page } from '@playwright/test';

export const playwrightLocators = {
    logoImage:          (page: Page) => page.getByRole('img', { name: 'Website for practice automation' }),
    homeLink:           (page: Page) => page.getByRole('link', { name: 'Home' }),
    productsLink:       (page: Page) => page.getByRole('link', { name: ' Products' }),
    cartLink:           (page: Page) => page.getByRole('link', { name: 'Cart' }),
    signUpLogInLink:    (page: Page) => page.getByText('Signup / Login', { exact: true }),
    testCasesLink:      (page: Page) => page.getByRole('link', { name: 'Test Cases' }),
    apiTestingLink:     (page: Page) => page.getByText('API Testing', { exact: true }),
    videoTutorialLink:  (page: Page) => page.getByText('Video Tutorials', { exact: true }),
    contactUsLink:      (page: Page) => page.getByText('Contact us')

}