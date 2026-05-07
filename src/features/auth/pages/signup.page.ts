import { BasePage } from '@core/base/base.page';
import { paths } from '@config/paths';
import { expect, Page } from '@playwright/test';
import { routes } from '@config/routes';
import { assertTextEquals } from '@shared/assertion/generic';
import { getUserData } from '@shared/utils/data-helper';

export class SignUpPage extends BasePage {

  constructor(protected readonly page: Page) {
    super(page);
  }
private readonly accountInfoHeading = this.page.getByRole('heading', {
    name: 'Enter Account Information',
  });
  private readonly addressInfoHeading = this.page.getByRole('heading', { name: 'Address Information' });
  // Inputs
  private readonly nameInput = this.page.getByTestId('name');
  private readonly emailInput = this.page.getByTestId('email');
  private readonly passwordInput = this.page.getByTestId('password');
  private readonly firstNameInput = this.page.getByTestId('first_name');
  private readonly lastNameInput = this.page.getByTestId('last_name');
  private readonly companyInput = this.page.getByTestId('company');
  private readonly address1Input = this.page.getByTestId('address');
  private readonly address2Input = this.page.getByTestId('address2');
  private readonly stateInput = this.page.getByTestId('state');
  private readonly cityInput = this.page.getByTestId('city');
  private readonly zipcodeInput = this.page.getByTestId('zipcode');
  private readonly mobileNumberInput = this.page.getByTestId('mobile_number');
  //Dropdown list
  private readonly dayOfBirthSelection = this.page.getByTestId('days');
  private readonly monthOfBirthSelection = this.page.getByTestId('months');
  private readonly yearOfBirthSelection = this.page.getByTestId('years');
  private readonly countrySelection = this.page.getByTestId('country');
  // Radio buttons
  private readonly mrRadioButton = this.page.getByRole('radio', { name: 'Mr.' });
  private readonly mrsRadioButton = this.page.getByRole('radio', { name: 'Mrs.' });
  // Checkboxes
  private readonly newsletterCheckbox = this.page.getByRole('checkbox', {
    name: 'Sign up for our newsletter!',
  });
  private readonly offersCheckbox = this.page.getByRole('checkbox', {
    name: 'Receive special offers from',
  });
  //Button
  private readonly createAccountButton = this.page.getByTestId('create-account');

  public async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${routes.signup}$`));
    await expect(this.accountInfoHeading).toBeVisible();
    await expect(this.addressInfoHeading).toBeVisible();
  }
  public async titleSelection(user: any): Promise<void> {
    if (user.title.toLowerCase() === 'mr') {
      await this.mrRadioButton.click();
    } else if (user.title.toLowerCase() === 'mrs') {
      await this.mrsRadioButton.click();
    }
  }
  public async verifyNameAndEmailPrefilled(user: any): Promise<void> {
    const nameText = await this.nameInput.getAttribute('value');
    const emailText = await this.emailInput.getAttribute('value');
    assertTextEquals(nameText as string, user.name); // Verify name input is pre-filled with the name used during signup
    assertTextEquals(emailText as string, user.email); // Verify email input is pre-filled with the email used during signup
  }

  public async fillSignUpForm(username: string): Promise<void> {
    const user = getUserData(username, paths.data.signup.registerUsers);
    this.titleSelection(user);
    await this.verifyNameAndEmailPrefilled(user);
    await this.passwordInput.fill(user.password);
    await this.dayOfBirthSelection.selectOption({ value: user.day });
    await this.monthOfBirthSelection.selectOption({ value: user.month });
    await this.yearOfBirthSelection.selectOption({ value: user.year });
    await this.newsletterCheckbox.check();
    await this.offersCheckbox.check();
    await this.firstNameInput.fill(user.firstname);
    await this.lastNameInput.fill(user.lastname);
    //await this.signUpLocator.input.company.fill(user.company);
    await this.address1Input.fill(user.address1);
    await this.address2Input.fill(user.address2);
    await this.countrySelection.selectOption({ value: user.country });
    await this.stateInput.fill(user.state);
    await this.cityInput.fill(user.city);
    await this.zipcodeInput.fill(user.zipcode);
    await this.mobileNumberInput.fill(user.mobile_number);
  }

  public async clickCreateAccountButton(): Promise<void> {
    await this.createAccountButton.click();
  }

  public async registerNewAccount(username: string): Promise<void> {
    await this.fillSignUpForm(username);
    await this.clickCreateAccountButton();
  }
}
