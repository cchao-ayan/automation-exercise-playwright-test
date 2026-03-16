import { BasePage } from '@/base/base.page';
import { signup } from '../../test-data';
import { expect } from '@playwright/test';
import { ROUTES } from '@/constant/routes.const';
import { SIGNUP_LOCATORS } from '@/pages/signup/signup.locator';
import { resolve } from '@/base/locator';
import { assertTextEquals } from '@/assertion/generic';


export class SignUpPage extends BasePage {
  // ======================
  // Locators are located at ./signup.locators.ts in a form of key/values
  // ======================

  protected async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.SIGNUP_LOGIN}$`));
    await expect(resolve(this.page, SIGNUP_LOCATORS.header.accountInfo)).toBeVisible();
    await expect(resolve(this.page, SIGNUP_LOCATORS.header.addressInfo)).toBeVisible();
  }
  protected async fillSignUpForm(index: number): Promise<void> {
    const nameText = await resolve(this.page, SIGNUP_LOCATORS.input.name).getAttribute('value');
    //console.log(`Name input inner text: ${nameText}`); // Debug log for name input
    const emailText = await resolve(this.page, SIGNUP_LOCATORS.input.email).getAttribute('value');
    //console.log(`Email input inner text: ${emailText}`); // Debug log for email input
    if (signup[index].title.toLowerCase() === 'mr') {
      await resolve(this.page, SIGNUP_LOCATORS.radiobutton.mr).click();
    } else if (signup[index].title.toLowerCase() === 'mrs') {
      await resolve(this.page, SIGNUP_LOCATORS.radiobutton.mrs).click();
    }
    assertTextEquals(nameText as string, signup[index].name); // Verify name input is pre-filled with the name used during signup
    assertTextEquals(emailText as string, signup[index].email); // Verify email input is pre-filled with the email used during signup
    await resolve(this.page, SIGNUP_LOCATORS.input.password).fill(signup[index].password);
    await resolve(this.page, SIGNUP_LOCATORS.input.dayOfBirth).selectOption(signup[index].day);
    await resolve(this.page, SIGNUP_LOCATORS.input.monthOfBirth).selectOption(signup[index].month);
    await resolve(this.page, SIGNUP_LOCATORS.input.yearOfBirth).selectOption(signup[index].year);
    await resolve(this.page, SIGNUP_LOCATORS.checkbox.newsletter).check();
    await resolve(this.page, SIGNUP_LOCATORS.checkbox.offers).check();
    await resolve(this.page, SIGNUP_LOCATORS.input.firstName).fill(signup[index].firstName);
    await resolve(this.page, SIGNUP_LOCATORS.input.lastName).fill(signup[index].lastName);
    await resolve(this.page, SIGNUP_LOCATORS.input.company).fill(signup[index].company);
    await resolve(this.page, SIGNUP_LOCATORS.input.address1).fill(signup[index].address1);
    await resolve(this.page, SIGNUP_LOCATORS.input.address2).fill(signup[index].address2);
    await resolve(this.page, SIGNUP_LOCATORS.input.country).selectOption(signup[index].country);
    await resolve(this.page, SIGNUP_LOCATORS.input.state).fill(signup[index].state);
    await resolve(this.page, SIGNUP_LOCATORS.input.city).fill(signup[index].city);
    await resolve(this.page, SIGNUP_LOCATORS.input.zipcode).fill(signup[index].zipcode);
    await resolve(this.page, SIGNUP_LOCATORS.input.mobileNumber).fill(signup[index].mobileNumber);
  }

  protected async clickCreateAccountButton() {
    await resolve(this.page, SIGNUP_LOCATORS.button.createAccount).click();
  }

  protected async registerNewAccount(index: number) {
    await this.fillSignUpForm(index);
    await this.clickCreateAccountButton();
  }
}
