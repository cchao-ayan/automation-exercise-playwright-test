import { Page } from "@playwright/test";

export const locators = {
    signUpInfoHeading:          'b:has-text("ENTER ACCOUNT INFORMATION")',
    signUpAddressHeading:       'b:has-text("ADDRESS INFORMATION")',
    signUpDateOfBirthDay:       '#days',
    signUpDateOfBirthMonth:     '#months',
    signUpDateOfBirthYear:      '#years',
    signUpZipCodeInput:         '#zipcode'
}

export const playwrightLocators = {
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
    signUpCreateAccountButton:  (page: Page) => page.getByRole('button', { name: 'Create Account' })
}