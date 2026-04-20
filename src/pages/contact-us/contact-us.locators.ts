import { Page } from '@playwright/test';

export const CONTACT_US = (page: Page) => ({
  header: {
    contactUs: page.getByRole('heading', { name: 'Contact Us' }),
    getInTouch: page.getByRole('heading', { name: 'Get In Touch' }),
    feedback: page.getByRole('heading', { name: 'Feedback For Us' })
  },
  input: {
    name: page.getByTestId('name'),
    email: page.getByTestId('email'),
    subject: page.getByTestId('subject'),
    message: page.locator('message')
  },
  button: {
    upload: page.locator('input[name="upload file"]'),
    submit: page.locator('submit-button'),
    home: page.locator('a.btn.btn-success >> span:has-text("Home")')
  },
  text: {
    note: page.getByText('Note: Below contact form is for testing purpose.'),
    feedback1: page.locator('p:has-text("We really appreciate your response to our website.")'),
    feedback2: page.locator('p:has-text("Kindly share your feedback with us at feedback@automationexercise.com.")'),
    feedback3: page.locator('p:has-text("If you have any suggestion areas or improvements, do let us know. We will definitely work on it.")'),
    feedback4: page.locator('p:has-text("Thank you")'),
    success: page.getByText('Success! Your details have')
  }

});