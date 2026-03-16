import { BasePage } from '@/base/base.page';
import { contactUsValid, uploadFilePath } from '../../test-data';
import { ROUTES } from '@/constant/routes.const';
import { expect } from '@playwright/test';
import { CONTACT_US } from './contact-us.locator';
import { resolve } from '@/base/locator';

export class ContactUsPage extends BasePage {
  // ======================
  // Locators are located at ./contact-us.locators.ts in a form of key/values
  // ======================  

  // ======================
  // State methods
  // ======================
  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.CONTACT_US}$`));
    await expect(this.locator(CONTACT_US.header.contactUs)).toBeVisible();
    await expect(this.locator(CONTACT_US.header.feedback)).toBeVisible();
    await expect(this.locator(CONTACT_US.header.getInTouch)).toBeVisible();
  }
  async fillContactUsForm() {
    await this.locator(CONTACT_US.input.name).fill(contactUsValid.name);
    await this.locator(CONTACT_US.input.email).fill(contactUsValid.email);
    await this.locator(CONTACT_US.input.subject).fill(contactUsValid.subject);
    await this.locator(CONTACT_US.input.message).fill(contactUsValid.message);
  }
  async uploadFile() {
    await this.locator(CONTACT_US.button.upload).setInputFiles(uploadFilePath.upload.filePathContactUs);
  }
  async clickSubmitButton() {
    await this.locator(CONTACT_US.button.submit).click();
  }
  async submitContactUsForm() {
    await this.fillContactUsForm();
    await this.uploadFile();
    await this.clickSubmitButton();
  }
  async verifySuccessMessageState() {
    await expect(this.locator(CONTACT_US.text.note)).toBeVisible();
    await expect(this.locator(CONTACT_US.text.success)).toBeVisible();
    await expect(this.locator(CONTACT_US.button.home)).toBeVisible();
  }
  async clickHomeButton() {
    await this.locator(CONTACT_US.button.home).click();
  }
}

