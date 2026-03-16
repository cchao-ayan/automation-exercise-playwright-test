import { role, css, text } from '@/base/locator'

export const HEADER_LOCATORS = {
    link: {
        logo: role('link', 'Website for practice'),
        home: role('link', 'Home'),
        products: role('link', 'Products'),
        cart: role('link', 'Cart'),
        signup_login: role('link', 'Signup / Login'),
        test_case: role('link', 'Test Cases'),
        api_testing: role('link', 'API Testing'),
        video_tutorial: role('link', 'Video Tutorials'),
        contact_us: role('link', 'Contact us'),
        delete_account: role('link', 'Delete Account'),
        logout: role('link', 'Logout')
    },
    image: {
        logo: css('img[src*="/home/logo.png"]')
    },
    text: {
        logged_in_as: text('Logged in as')
    }
}




