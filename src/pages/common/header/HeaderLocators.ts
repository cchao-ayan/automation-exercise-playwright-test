import { Page } from "@playwright/test";

export const locators = {
    logoImage:          (page: Page) => page.locator('img[src*="/home/logo.png"]'),
    logoImageSignUp:    (page: Page) => page.getByRole('link', { name: 'Website for practice' }),
    homeLink:           (page: Page) => page.getByRole('link', { name: 'Home' }),
    productsLink:       (page: Page) => page.getByRole('link', { name: ' Products' }),
    cartLink:           (page: Page) => page.getByRole('link', { name: 'Cart' }),
    signUpLogInLink:    (page: Page) => page.getByText('Signup / Login', { exact: true }),
    testCasesLink:      (page: Page) => page.getByRole('link', { name: 'Test Cases' }),
    apiTestingLink:     (page: Page) => page.getByText('API Testing', { exact: true }),
    videoTutorialLink:  (page: Page) => page.getByText('Video Tutorials', { exact: true }),
    contactUsLink:      (page: Page) => page.getByText('Contact us'),
    deleteAccountLink:  (page: Page) => page.getByText('Delete Account', { exact: true }),
    logoutLink:         (page: Page) => page.getByText('Logout', { exact: true }),
    loggedInAsLabel:    (page: Page) => page.locator('.fa fa-home')

}