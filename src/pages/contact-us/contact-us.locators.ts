import { Page } from '@playwright/test';

export class ContactUsLocators {
  constructor(private readonly page: Page) {}

  readonly contactUsHeading = this.page.getByRole('heading', { name: 'Contact Us' });
  readonly getInTouchHeading = this.page.getByRole('heading', { name: 'Get In Touch' });
  readonly feedbackHeading = this.page.getByRole('heading', { name: 'Feedback For Us' });
  readonly nameInput = this.page.getByTestId('name');
  readonly emailInput = this.page.getByTestId('email');
  readonly subjectInput = this.page.getByTestId('subject');
  readonly messageInput = this.page.locator('message');
  readonly uploadButton = this.page.locator('input[name="upload file"]');
  readonly submitButton = this.page.locator('submit-button');
  readonly homeButton = this.page.locator('a.btn.btn-success >> span:has-text("Home")');
  readonly noteText = this.page.getByText('Note: Below contact form is for testing purpose.');
  readonly feedback1Text = this.page.locator(
    'p:has-text("We really appreciate your response to our website.")',
  );
  readonly feedback2Text = this.page.locator(
    'p:has-text("Kindly share your feedback with us at feedback@automationexercise.com.")',
  );
  readonly feedback3Text = this.page.locator(
    'p:has-text("If you have any suggestion areas or improvements, do let us know. We will definitely work on it.")',
  );
  readonly feedback4Text = this.page.locator('p:has-text("Thank you")');
  readonly successText = this.page.getByText('Success! Your details have');
}
