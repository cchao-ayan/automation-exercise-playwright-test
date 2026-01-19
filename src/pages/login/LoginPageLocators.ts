import { Page } from "@playwright/test";

export const locators = {

}

export const playwrightLocators = {
    newUserHeading: (page: Page) => page.getByText('New User Signup!', { exact: true }),
    newUserNameInput: (page: Page) => page.getByRole('textbox', { name: 'Name' }),
    newUserEmailInput: (page: Page) => page.locator('.signup-form').getByRole('textbox', { name: 'Email Address' }),
    newUserSignupButton: (page: Page) => page.getByRole('button', { name: 'Signup' }),
}
