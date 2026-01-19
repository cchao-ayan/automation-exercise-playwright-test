import { Page } from "@playwright/test";

export const locators = {
    accountCreatedHeading: 'b:has-text("Account Created!")',
    text1: 'p:has-text("Congratulations! Your new account has been successfully created!")',
    text2: 'p:has-text("You can now take advantage of member privileges to enhance your online shopping experience with us.")'
}
export const playwrightLocators = {
    accountCreatedContinueButton:            (page: Page) => page.getByTestId('continue-button'),
}
