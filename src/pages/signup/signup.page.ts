import { BasePage } from '../base/base.page';
import { paths } from '/config/paths';
import { expect, Page } from '@playwright/test';
import { routes } from '/config/routes';
import { SignUpLocators } from '/pages/signup/signup.locator';
import { assertTextEquals } from '/assertion/generic';
import { getUserData } from '../../utils/data-helper';

export class SignUpPage extends BasePage {
  private readonly locators: SignUpLocators;

  constructor(protected readonly page: Page) {
    super(page);
    this.locators = new SignUpLocators(this.page);
  }

  public async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.signup}$`));
    await expect(this.locators.accountInfoHeading).toBeVisible();
    await expect(this.locators.addressInfoHeading).toBeVisible();
  }
  public async titleSelection(user: any): Promise<void> {
    if (user.title.toLowerCase() === 'mr') {
      await this.locators.mrRadioButton.click();
    } else if (user.title.toLowerCase() === 'mrs') {
      await this.locators.mrsRadioButton.click();
    }
  }
  public async verifyNameAndEmailPrefilled(user: any): Promise<void> {
    const nameText = await this.locators.nameInput.getAttribute('value');
    const emailText = await this.locators.emailInput.getAttribute('value');
    assertTextEquals(nameText as string, user.name); // Verify name input is pre-filled with the name used during signup
    assertTextEquals(emailText as string, user.email); // Verify email input is pre-filled with the email used during signup
  }

  public async fillSignUpForm(username: string): Promise<void> {
    const user = getUserData(username, paths.data.usersCsv);
    this.titleSelection(user);
    await this.verifyNameAndEmailPrefilled(user);
    await this.locators.passwordInput.fill(user.password);
    await this.locators.dayOfBirthSelection.selectOption({ value: user.day });
    await this.locators.monthOfBirthSelection.selectOption({ value: user.month });
    await this.locators.yearOfBirthSelection.selectOption({ value: user.year });
    await this.locators.newsletterCheckbox.check();
    await this.locators.offersCheckbox.check();
    await this.locators.firstNameInput.fill(user.firstname);
    await this.locators.lastNameInput.fill(user.lastname);
    //await this.signUpLocator.input.company.fill(user.company);
    await this.locators.address1Input.fill(user.address1);
    await this.locators.address2Input.fill(user.address2);
    await this.locators.countrySelection.selectOption({ value: user.country });
    await this.locators.stateInput.fill(user.state);
    await this.locators.cityInput.fill(user.city);
    await this.locators.zipcodeInput.fill(user.zipcode);
    await this.locators.mobileNumberInput.fill(user.mobile_number);
  }

  public async clickCreateAccountButton(): Promise<void> {
    await this.locators.createAccountButton.click();
  }

  public async registerNewAccount(username: string): Promise<void> {
    await this.fillSignUpForm(username);
    await this.clickCreateAccountButton();
  }
}
