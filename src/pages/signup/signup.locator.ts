import { Page } from '@playwright/test';

export const SIGNUP = (page: Page) => ({
    header: {
        accountInfo: page.getByRole('heading', { name: 'Enter Account Information' }),
        addressInfo: page.getByRole('heading', { name: 'Address Information' }),
    },
    input: {
        name: page.getByTestId('name'),
        email: page.getByTestId('email'),
        password: page.getByTestId('password'),
        dayOfBirth: page.getByTestId('days'),
        monthOfBirth: page.getByTestId('months'),
        yearOfBirth: page.getByTestId('years'),
        firstName: page.getByTestId('first_name'),
        lastName: page.getByTestId('last_name'),
        company: page.getByTestId('company'),
        address1: page.getByTestId('address'),
        address2: page.getByTestId('address2'),
        state: page.getByTestId('state'),
        city: page.getByTestId('city'),
        country: page.getByTestId('country'),
        zipcode: page.getByTestId('zipcode'),
        mobileNumber: page.getByTestId('mobile_number'),
    },
    radiobutton: {
        mr: page.getByRole('radio', { name: 'Mr.' }),
        mrs: page.getByRole('radio', { name: 'Mrs.' })
    },
    checkbox: {
        newsletter: page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }),
        offers: page.getByRole('checkbox', { name: 'Receive special offers from' })
    },
    button: {
        createAccount: page.getByTestId('create-account')
    }

});

