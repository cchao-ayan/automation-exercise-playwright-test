import { BasePage } from '@core/base/base.page';
import * as validTestData from '@features/contact-us/test-data/valid.test-data.json'
import { routes } from '@config/routes';
import { paths } from '@config/paths';
import { Page, expect } from '@playwright/test';

export class ContactUsPage extends BasePage {

  constructor(protected readonly page: Page) {
    super(page);
  }
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
  // ======================
  // State methods
  // ======================
  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.contactUs}$`));
    await expect(this.contactUsHeading).toBeVisible();
    await expect(this.feedbackHeading).toBeVisible();
    await expect(this.getInTouchHeading).toBeVisible();
  }
  public async fillContactUsForm() {
    await this.nameInput.fill(validTestData.name);
    await this.emailInput.fill(validTestData.email);
    await this.subjectInput.fill(validTestData.subject);
    await this.messageInput.fill(validTestData.message);
  }
  public async uploadFile() {
    await this.uploadButton.setInputFiles(paths.upload.contactUs);
  }
  public async clickSubmitButton() {
    await this.submitButton.click();
  }
  public async submitContactUsForm() {
    await this.fillContactUsForm();
    await this.uploadFile();
    await this.clickSubmitButton();
  }
  public async verifySuccessMessageState() {
    await expect(this.noteText).toBeVisible();
    await expect(this.successText).toBeVisible();
    await expect(this.homeButton).toBeVisible();
  }
  public async clickHomeButton() {
    await this.homeButton.click();
  }
}
