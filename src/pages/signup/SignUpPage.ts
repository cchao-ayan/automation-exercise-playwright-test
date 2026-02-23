import { BasePage } from '../../pages';
import  { signup }  from '../../test-data';
import { locators } from './SignUpPageLocators';
import { assertTextEquals } from '../../assertion/generic';

export class SignUpPage extends BasePage {
  async ready() {
    await this.verifySignUpUrl('https://automationexercise.com/signup');
    await this.header.verifyLogoIsVisible();
    await this.verifyAccountInfoHeadingTestIsVisible();
    await this.verifyAddressInfoHeadingTextIsVisible();
  }

  async getNameAttributeValue(): Promise<string | null> {
    const nameText = locators.nameInput(this.page).getAttribute('value');
    return (nameText !== null) ? nameText : ''; //co-elescing return statement to ensure a string is always returned
  }  
  
  async getEmailAttributeValue(): Promise<string | null> {
    const emailText = locators.emailInput(this.page).getAttribute('value');
    return (emailText !== null) ? emailText : ''; //co-elescing return statement to ensure a string is always returned
  }

  async navigateToSignUpPage(url: string) {
    await this.goToUrl(url);
  }

  async verifySignUpUrl(expectedUrl: string) {
    await this.expectUrl(expectedUrl);
  }

  async verifyAccountInfoHeadingTestIsVisible() {
    const accountInfo = locators.infoHeading(this.page);
    await this.expectVisible(accountInfo);
    await this.expectHaveText(accountInfo, 'Enter Account Information');
  }

  async verifyAddressInfoHeadingTextIsVisible() {
    const addressInfo = locators.addressHeading(this.page);
    await this.expectVisible(addressInfo);
    await this.expectHaveText(addressInfo, 'Address Information');
  }

  async verifyLoginErrorMessageIsVisible() {
    const loginErrorMessage = locators.loginErrorMessage(this.page);
    await this.expectVisible(loginErrorMessage);
    await this.expectHaveText(loginErrorMessage, 'Your email or password is incorrect!');
  }

  async verifyExistingEmailErrorMessageIsVisible() {
    const emailErrorMessage = locators.existingEmailErrMsg(this.page);
    await this.expectVisible(emailErrorMessage);
    await this.expectHaveText(emailErrorMessage, 'Email Address already exist!');
  }

  async enterCredentials(email: string, password: string) {
    await this.fill(locators.loginEmailInput(this.page), email);
    await this.fill(locators.loginPasswordInput(this.page), password);
  }

  async clickLoginButton() {
    await this.click(locators.loginButton(this.page));
  }

  async login(email: string, password: string) {
    await this.enterCredentials(email, password);
    await this.clickLoginButton();
  }

  async fillSignUpForm() {
    const nameText = await this.getNameAttributeValue();
    //console.log(`Name input inner text: ${nameText}`); // Debug log for name input
    const emailText = await this.getEmailAttributeValue();
    //console.log(`Email input inner text: ${emailText}`); // Debug log for email input
    if (signup[0].title === 'Mr') {
      await this.check(locators.MRTitle(this.page));
    } else if (signup[0].title === 'Mrs') {
      await this.check(locators.MSTitle(this.page));
    }
    assertTextEquals(nameText as string, signup[0].name); // Verify name input is pre-filled with the name used during signup
    assertTextEquals(emailText as string, signup[0].email); // Verify email input is pre-filled with the email used during signup
    await this.fill(locators.passwordInput(this.page), signup[0].password);
    await this.selectByValue(locators.dateOfBirthDay(this.page), signup[0].day);
    await this.selectByValue(locators.dateOfBirthMonth(this.page), signup[0].month);
    await this.selectByValue(locators.dateOfBirthYear(this.page), signup[0].year);
    await this.fill(locators.firstNameInput(this.page), signup[0].firstName);
    await this.fill(locators.lastNameInput(this.page), signup[0].lastName);
    await this.fill(locators.companyInput(this.page), signup[0].company);
    await this.fill(locators.address1Input(this.page), signup[0].address1);
    await this.fill(locators.address2Input(this.page), signup[0].address2);
    await this.selectByValue(locators.countrySelect(this.page), signup[0].country);
    await this.fill(locators.stateInput(this.page), signup[0].state);
    await this.fill(locators.cityInput(this.page), signup[0].city);
    await this.fill(locators.zipCodeInput(this.page), signup[0].zipcode);
    await this.fill(locators.mobileNumberInput(this.page), signup[0].mobileNumber);
  }

  async clickCreateAccountButton() {
    await this.click(locators.createAccountButton(this.page));
  }

  async registerNewAccount() {
    await this.fillSignUpForm();
    await this.clickCreateAccountButton();
  }
}
