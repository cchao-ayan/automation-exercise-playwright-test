import { Page } from '@playwright/test';

export class AccountCreatedLocators {
    constructor(private readonly page: Page) {}

    readonly accountCreatedHeading = this.page.getByRole('heading', { name: 'Account Created!' });
    readonly message1 = this.page.getByText('Congratulations! Your new account has been successfully created!');
    readonly message2 = this.page.getByText('You can now take advantage of member privileges to enhance your online shopping experience with us.',);
    readonly continueButton = this.page.getByTestId('continue-button');
}