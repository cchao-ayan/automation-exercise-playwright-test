import { BasePage } from '../base/BasePage';
import { locators } from './SignUpPageLocators';
import { testData } from './SignUpTestData';
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
    if (testData.signUp.title === 'Mr') {
      await this.check(locators.MRTitle(this.page));
    } else if (testData.signUp.title === 'Mrs') {
      await this.check(locators.MSTitle(this.page));
    }
    assertTextEquals(nameText as string, testData.signUp.name); // Verify name input is pre-filled with the name used during signup
    assertTextEquals(emailText as string, testData.signUp.email); // Verify email input is pre-filled with the email used during signup
    await this.fill(locators.passwordInput(this.page), testData.signUp.password);
    await this.selectByValue(locators.dateOfBirthDay(this.page), testData.signUp.day);
    await this.selectByValue(locators.dateOfBirthMonth(this.page), testData.signUp.month);
    await this.selectByValue(locators.dateOfBirthYear(this.page), testData.signUp.year);
    await this.fill(locators.firstNameInput(this.page), testData.signUp.firstName);
    await this.fill(locators.lastNameInput(this.page), testData.signUp.lastName);
    await this.fill(locators.companyInput(this.page), testData.signUp.company);
    await this.fill(locators.address1Input(this.page), testData.signUp.address1);
    await this.fill(locators.address2Input(this.page), testData.signUp.address2);
    await this.selectByValue(locators.countrySelect(this.page), testData.signUp.country);
    await this.fill(locators.stateInput(this.page), testData.signUp.state);
    await this.fill(locators.cityInput(this.page), testData.signUp.city);
    await this.fill(locators.zipCodeInput(this.page), testData.signUp.zipcode);
    await this.fill(locators.mobileNumberInput(this.page), testData.signUp.mobileNumber);
  }

  async clickCreateAccountButton() {
    await this.click(locators.createAccountButton(this.page));
  }

  async registerNewAccount() {
    await this.fillSignUpForm();
    await this.clickCreateAccountButton();
  }
}
