import { role, testId, css } from '@/base/locator'

export const SIGNUP_LOCATORS = {
    header: {
        accountInfo: role('heading', 'Enter Account Information'),
        addressInfo: role('heading', 'Address Information'),
    },
    input: {
        name: testId('name'),
        email: testId('email'),
        password: testId('password'),
        dayOfBirth: css('Day'),
        monthOfBirth: css('Month'),
        yearOfBirth: css('Year'),
        firstName: testId('first_name'),
        lastName: testId('last_name'),
        company: testId('company'),
        address1: testId('address'),
        address2: testId('address2'),
        state: testId('state'),
        city: testId('city'),
        country: testId('country'),
        zipcode: testId('zipcode'),
        mobileNumber: testId('mobile_number'),
    },
    radiobutton: {
        mr: role('radio', 'Mr.'),
        mrs: role('radio', 'Mrs.')
    },
    checkbox: {
        newsletter: role('checkbox', 'newsletter'),
        offers: role('checkbox', 'optin')
    },
    button: {
        createAccount: testId('create-account')
    }

}

