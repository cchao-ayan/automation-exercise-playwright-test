import { Page } from "@playwright/test";
import { sign } from "crypto";

export const locators = {
    signUpInfoHeading:          (page: Page) => page.locator('b:has-text("ENTER ACCOUNT INFORMATION")'),
    signUpAddressHeading:       (page: Page) => page.locator('b:has-text("ADDRESS INFORMATION")'),
    signUpDateOfBirthDay:       (page: Page) => page.locator('#days'),
    signUpDateOfBirthMonth:     (page: Page) => page.locator('#months'),
    signUpDateOfBirthYear:      (page: Page) => page.locator('#years'),
    signUpZipCodeInput:         (page: Page) => page.locator('#zipcode'),
    signUpMRTitle:              (page: Page) => page.getByRole('radio', { name: 'Mr.' }),
    signUpMSTitle:              (page: Page) => page.getByRole('radio', { name: 'Mrs.' }),
    signUpNameInput:            (page: Page) => page.getByTestId('name'),
    signUpEmailInput:           (page: Page) => page.getByTestId('email'),
    signUpPasswordInput:        (page: Page) => page.getByTestId('password'),       
    signUpNewsletterCheckbox:   (page: Page) => page.getByRole('checkbox', { name: 'newsletter' }),
    signUpOffersCheckbox:       (page: Page) => page.getByRole('checkbox', { name: 'optin' }),
    signUpFirstNameInput:       (page: Page) => page.getByTestId('first_name'),
    signUpLastNameInput:        (page: Page) => page.getByTestId('last_name'),
    signUpCompanyInput:         (page: Page) => page.getByTestId('company'),
    signUpAddress1Input:        (page: Page) => page.getByTestId('address'),
    signUpAddress2Input:        (page: Page) => page.getByTestId('address2'),
    signUpCountrySelect:        (page: Page) => page.getByTestId('country'),
    signUpStateInput:           (page: Page) => page.getByTestId('state'),
    signUpCityInput:            (page: Page) => page.getByTestId('city'),
    signUpMobileNumberInput:    (page: Page) => page.getByTestId('mobile_number'),
    signUpCreateAccountButton:  (page: Page) => page.getByRole('button', { name: 'Create Account' }),
    signUpLoginAccountHeading:  (page: Page) => page.getByText('Login to your account', { exact: true }),
    signUpLoginEmailInput:      (page: Page) => page.getByTestId ('login-email'),
    signUpLoginPasswordInput:   (page: Page) => page.getByTestId ('login-password'),
    signUpLoginButton:          (page: Page) => page.getByTestId('login-button'),

}