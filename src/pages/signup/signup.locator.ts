import { Page } from '@playwright/test';

export class SignUpLocators {
    constructor(private readonly page: Page) { }
    // Headings
    readonly accountInfoHeading = this.page.getByRole('heading', { name: 'Enter Account Information' });
    readonly addressInfoHeading = this.page.getByRole('heading', { name: 'Address Information' });
    // Inputs
    readonly nameInput = this.page.getByTestId('name');
    readonly emailInput = this.page.getByTestId('email');
    readonly passwordInput = this.page.getByTestId('password');
    readonly firstNameInput = this.page.getByTestId('first_name');
    readonly lastNameInput = this.page.getByTestId('last_name');
    readonly companyInput = this.page.getByTestId('company');
    readonly address1Input = this.page.getByTestId('address');
    readonly address2Input = this.page.getByTestId('address2');
    readonly stateInput = this.page.getByTestId('state');
    readonly cityInput = this.page.getByTestId('city');
    readonly zipcodeInput = this.page.getByTestId('zipcode');
    readonly mobileNumberInput = this.page.getByTestId('mobile_number');
    //Dropdown list
    readonly dayOfBirthSelection = this.page.getByTestId('days');
    readonly monthOfBirthSelection = this.page.getByTestId('months');
    readonly yearOfBirthSelection = this.page.getByTestId('years');
    readonly countrySelection = this.page.getByTestId('country');
    // Radio buttons
    readonly mrRadioButton = this.page.getByRole('radio', { name: 'Mr.' });
    readonly mrsRadioButton = this.page.getByRole('radio', { name: 'Mrs.' });
    // Checkboxes
    readonly newsletterCheckbox = this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
    readonly offersCheckbox = this.page.getByRole('checkbox', { name: 'Receive special offers from' });
    //Button
    readonly createAccountButton = this.page.getByTestId('create-account');

}

