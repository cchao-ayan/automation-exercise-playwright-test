import { BasePage } from '../base/base.page';
import { contactUsValid} from '/test-data';
import { routes } from '/config/routes';
import { paths } from '/config/paths';
import { Page, expect } from '@playwright/test';
import { ContactUsLocators } from './contact-us.locators';

export class ContactUsPage extends BasePage {

  private readonly locators: ContactUsLocators;
  
  constructor(protected readonly page: Page) {
    super(page);
    this.locators = new ContactUsLocators(this.page);
  }

  // ======================
  // State methods
  // ======================
  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.contactUs}$`));
    await expect(this.locators.contactUsHeading).toBeVisible();
    await expect(this.locators.feedbackHeading).toBeVisible();
    await expect(this.locators.getInTouchHeading).toBeVisible();
  }
  public async fillContactUsForm() {
    await this.locators.nameInput.fill(contactUsValid.name);
    await this.locators.emailInput.fill(contactUsValid.email);
    await this.locators.subjectInput.fill(contactUsValid.subject);
    await this.locators.messageInput.fill(contactUsValid.message);
  }
  public async uploadFile() {
    await this.locators.uploadButton.setInputFiles(paths.upload.contactUs);
  }
  public async clickSubmitButton() {
    await this.locators.submitButton.click();
  }
  public async submitContactUsForm() {
    await this.fillContactUsForm();
    await this.uploadFile();
    await this.clickSubmitButton();
  }
  public async verifySuccessMessageState() {
    await expect(this.locators.noteText).toBeVisible();
    await expect(this.locators.successText).toBeVisible();
    await expect(this.locators.homeButton).toBeVisible();
  }
  public async clickHomeButton() {
    await this.locators.homeButton.click();
  }
}

