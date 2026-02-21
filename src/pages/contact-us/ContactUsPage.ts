import { BasePage } from '../base/BasePage';
import { locators } from './ContactUsPageLocators';
import data from '../../test-data/ContactUsTestData.json';

export class ContactUsPage extends BasePage {
  async ready() {
    await this.verifyContactUsPageUrl('https://automationexercise.com/contact_us');
    await this.header.verifyLogoIsVisible();
    await this.verifyContactUsFormIsVisible();
    await this.verifyGetInTouchHeadingIsVisible();
    await this.verifyFeedbackHeadingIsVisible();
    await this.verifyFeedbackTextIsVisible();
  }
  async navigateToContactUsPage(url: string) {
    await this.goToUrl(url);
  }
  async verifyContactUsPageUrl(expectedUrl: string) {
    await this.expectUrl(expectedUrl);
  }
  async verifyContactUsFormIsVisible() {
    const contactUsForm = locators.contactUsSection(this.page);
    await this.expectVisible(contactUsForm);
    await this.expectHaveText(contactUsForm, 'Contact Us');
  }
  async verifyGetInTouchHeadingIsVisible() {
    const getInTouchHeading = locators.getInTouchHeading(this.page);
    await this.expectVisible(getInTouchHeading);
    await this.expectHaveText(getInTouchHeading, 'Get In Touch');
  }
  async verifyFeedbackHeadingIsVisible() {
    const feedbackHeading = locators.feedbackHeading(this.page);
    await this.expectVisible(feedbackHeading);
    await this.expectHaveText(feedbackHeading, 'Feedback For Us');
  }
  async verifyFeedbackTextIsVisible() {
    await this.expectVisible(locators.feedbackText1(this.page));
    await this.expectVisible(locators.feedbackText2(this.page));
    await this.expectVisible(locators.feedbackText3(this.page));
    await this.expectVisible(locators.feedbackText4(this.page));
  }
  async fillContactUsForm() {
    await this.fill(locators.nameInput(this.page), data[0].validSubmission.name);
    await this.fill(locators.emailInput(this.page), data[0].validSubmission.email);
    await this.fill(locators.subjectInput(this.page), data[0].validSubmission.subject);
    await this.fill(locators.messageInput(this.page), data[0].validSubmission.message);
  }
  async uploadFile() {
    const uploadData = this.page.locator('input[name="upload_file"]');
    await uploadData.setInputFiles(data[2].upload.filePath);
  }
  async clickSubmitButton() {
    await this.click(locators.submitButton(this.page));
  }
  async submitContactUsForm() {
    await this.fillContactUsForm();
    await this.uploadFile();
    await this.clickSubmitButton();
  }

  async verifySuccessMessageState() {
    await this.expectVisible(locators.successMessage(this.page));
    await this.expectHaveText(
      locators.successMessage(this.page),
      'Success! Your details have been submitted successfully.',
    );
  }
  async clickHomeButton() {
    await this.click(locators.homeButton(this.page));
  }
}
