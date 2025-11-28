import { Page } from "@playwright/test";

export const locators = {
    logoImage:                  'img[alt="Website for automation practice"]',
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
    signUpNameInput:            (page: Page) => page.getByRole('textbox', { name: 'Name *' }),
    signUpEmailInput:           (page: Page) => page.getByRole('textbox', { name: 'Email *' }),
    signUpPasswordInput:        (page: Page) => page.getByRole('textbox', { name: 'Password *' }),
    signUpNewsletterCheckbox:   (page: Page) => page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }),
    signUpOffersCheckbox:       (page: Page) => page.getByRole('checkbox', { name: 'Receive special offers from our partners!' }),
    signUpFirstNameInput:       (page: Page) => page.getByRole('textbox', { name: 'First name *' }),
    signUpLastNameInput:        (page: Page) => page.getByRole('textbox', { name: 'Last name *' }),
    signUpCompanyInput:         (page: Page) => page.getByRole('textbox', { name: 'Company' }),
    signUpAddress1Input:        (page: Page) => page.getByRole('textbox', { name: 'Address * (Street address, P.O. Box, Company name, etc.)' }),
    signUpAddress2Input:        (page: Page) => page.getByRole('textbox', { name: 'Address 2' }),
    signUpCountrySelect:        (page: Page) => page.getByRole('combobox', { name: 'Country *' }),
    signUpStateInput:           (page: Page) => page.getByRole('textbox', { name: 'State *' }),
    signUpCityInput:            (page: Page) => page.getByRole('textbox', { name: 'City *' }),
    signUpMobileNumberInput:    (page: Page) => page.getByRole('textbox', { name: 'Mobile Number *' }),
    signUpCreateAccountButton:  (page: Page) => page.getByRole('button', { name: 'Create Account' })
}