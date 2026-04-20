import { Locator } from '@playwright/test';

export const HEADER_LOCATORS = (root: Locator) => ({
    link: {
        logo: root.getByRole('link', { name: 'Website for practice' }),
        home: root.getByRole('link', { name: 'Home' }),
        products: root.getByRole('link', { name: 'Products' }),
        cart: root.getByRole('link', { name: 'Cart' }),
        signup_login: root.getByRole('link', { name: 'Signup / Login' }),
        test_case: root.getByRole('link', { name: 'Test Cases' }),
        api_testing: root.getByRole('link', { name: 'API Testing' }),
        video_tutorial: root.getByRole('link', { name: 'Video Tutorials' }),
        contact_us: root.getByRole('link', { name: 'Contact us' }),
        delete_account: root.getByRole('link', { name: 'Delete Account' }),
        logout: root.getByRole('link', { name: 'Logout' })
    },
    image: {
        logo: root.locator('img[src*="/home/logo.png"]')
    },
    text: {
        logged_in_as: root.getByText('Logged in as')
    }
});




