import { BasePage } from '../../base/base.page';
import { signup } from '../../test-data';
import { expect, Page } from '@playwright/test';
import { ROUTES } from '../../constant/routes.const';
import { SIGNUP } from '../../pages/signup/signup.locator';
import { assertTextEquals } from '../../assertion/generic';


export class SignUpPage extends BasePage {
 private readonly signUpLocator;
 
  constructor(protected readonly page: Page) {
    super(page);
    this.signUpLocator = SIGNUP(this.page);
  }

  public async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.SIGNUP}$`));
    await expect(this.signUpLocator.header.accountInfo).toBeVisible();
    await expect(this.signUpLocator.header.addressInfo).toBeVisible();
  }
  public async fillSignUpForm(index: number): Promise<void> {
    const nameText = await this.signUpLocator.input.name.getAttribute('value');
    //console.log(`Name input inner text: ${nameText}`); // Debug log for name input
    const emailText = await this.signUpLocator.input.email.getAttribute('value');
    //console.log(`Email input inner text: ${emailText}`); // Debug log for email input
    if (signup[index].title.toLowerCase() === 'mr') {
      await this.signUpLocator.radiobutton.mr.click();
    } else if (signup[index].title.toLowerCase() === 'mrs') {
      await this.signUpLocator.radiobutton.mrs.click();
    }
    assertTextEquals(nameText as string, signup[index].name); // Verify name input is pre-filled with the name used during signup
    assertTextEquals(emailText as string, signup[index].email); // Verify email input is pre-filled with the email used during signup
    await this.signUpLocator.input.password.fill(signup[index].password);
    await this.signUpLocator.input.dayOfBirth.selectOption(signup[index].day);
    await this.signUpLocator.input.monthOfBirth.selectOption(signup[index].month);
    await this.signUpLocator.input.yearOfBirth.selectOption(signup[index].year);
    await this.signUpLocator.checkbox.newsletter.check();
    await this.signUpLocator.checkbox.offers.check();
    await this.signUpLocator.input.firstName.fill(signup[index].firstName);
    await this.signUpLocator.input.lastName.fill(signup[index].lastName);
    await this.signUpLocator.input.company.fill(signup[index].company);
    await this.signUpLocator.input.address1.fill(signup[index].address1);
    await this.signUpLocator.input.address2.fill(signup[index].address2);
    await this.signUpLocator.input.country.selectOption(signup[index].country);
    await this.signUpLocator.input.state.fill(signup[index].state);
    await this.signUpLocator.input.city.fill(signup[index].city);
    await this.signUpLocator.input.zipcode.fill(signup[index].zipcode);
    await this.signUpLocator.input.mobileNumber.fill(signup[index].mobileNumber);
  }

  public async clickCreateAccountButton() {
    await this.signUpLocator.button.createAccount.click();
  }

  public async registerNewAccount(index: number) {
    await this.fillSignUpForm(index);
    await this.clickCreateAccountButton();
  }
}
