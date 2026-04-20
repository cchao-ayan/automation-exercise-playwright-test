import { Page } from '@playwright/test';

export const ACCOUNT_CREATED = (page: Page) => ({
    accountCreatedHeading: page.getByRole('heading', { name: 'Account Created!' }),
    text1: page.getByText('Congratulations! Your new account has been successfully created!'),
    text2: page.getByText('You can now take advantage of member privileges to enhance your online shopping experience with us.',),
    continueButton: page.getByTestId('continue-button')
});