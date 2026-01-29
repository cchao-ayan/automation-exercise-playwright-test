import { Page, test } from '@playwright/test';

export const locators = {
    contactUsSection:   (page: Page) => page.getByRole('heading', { name: 'Contact Us', level: 2 }),
    getInTouchHeading:  (page: Page) => page.getByRole('heading', { name: 'Get In Touch', level: 2 }),
    note:               (page: Page) => page.getByText('Note: Below contact form is for testing purpose.'),
    nameInput:          (page: Page) => page.getByTestId('name'),
    emailInput:         (page: Page) => page.getByTestId('email'),
    subjectInput:       (page: Page) => page.getByTestId('subject'),
    messageInput:       (page: Page) => page.getByTestId('message'),
    uploadButton:       (page: Page) => page.locator('input[name="upload file"]'),
    submitButton:       (page: Page) => page.getByTestId('submit-button'),
    feedbackHeading:    (page: Page) => page.getByRole('heading', { name: 'Feedback For Us', level: 2 }),
    feedbackText1:      (page: Page) => page.locator('p:has-text("We really appreciate your response to our website.")'),
    feedbackText2:      (page: Page) => page.locator('p:has-text("Kindly share your feedback with us at feedback@automationexercise.com.")'),
    feedbackText3:      (page: Page) => page.locator('p:has-text("If you have any suggestion areas or improvements, do let us know. We will definitely work on it.")'),
    feedbackText4:      (page: Page) => page.locator('p:has-text("Thank you")'),
    uploadFile:         (page: Page) => page.locator('input[name="upload_file"]'),
    successMessage:     (page: Page) => page.locator('#contact-page').getByText('Success! Your details have'),
    homeButton:         (page: Page) => page.locator('a.btn.btn-success >> span:has-text("Home")'),
}