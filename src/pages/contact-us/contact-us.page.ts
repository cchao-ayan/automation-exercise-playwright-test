import { BasePage } from '../../base/base.page';
import { contactUsValid, uploadFilePath } from '../../test-data';
import { ROUTES } from '../../constant/routes.const';
import { Page, expect } from '@playwright/test';
import { CONTACT_US } from './contact-us.locators';

export class ContactUsPage extends BasePage {

  private readonly contactUsLocator;
  
  constructor(protected readonly page: Page) {
    super(page);
    this.contactUsLocator = CONTACT_US(this.page);
  }

  // ======================
  // State methods
  // ======================
  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.CONTACT_US}$`));
    await expect(this.contactUsLocator.header.contactUs).toBeVisible();
    await expect(this.contactUsLocator.header.feedback).toBeVisible();
    await expect(this.contactUsLocator.header.getInTouch).toBeVisible();
  }
  private async fillContactUsForm() {
    await this.contactUsLocator.input.name.fill(contactUsValid.name);
    await this.contactUsLocator.input.email.fill(contactUsValid.email);
    await this.contactUsLocator.input.subject.fill(contactUsValid.subject);
    await this.contactUsLocator.input.message.fill(contactUsValid.message);
  }
  private async uploadFile() {
    await this.contactUsLocator.button.upload.setInputFiles(uploadFilePath.upload.filePathContactUs);
  }
  private async clickSubmitButton() {
    await this.contactUsLocator.button.submit.click();
  }
  private async submitContactUsForm() {
    await this.fillContactUsForm();
    await this.uploadFile();
    await this.clickSubmitButton();
  }
  private async verifySuccessMessageState() {
    await expect(this.contactUsLocator.text.note).toBeVisible();
    await expect(this.contactUsLocator.text.success).toBeVisible();
    await expect(this.contactUsLocator.button.home).toBeVisible();
  }
  private async clickHomeButton() {
    await this.contactUsLocator.button.home.click();
  }
}

