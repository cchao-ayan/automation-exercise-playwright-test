import { InvalidSignupFormTestData, SignupFormValidationResult, signupFormRequiredFields } from '@features/auth/types/signup-form.type';

export function validateSignupFormInput(data: InvalidSignupFormTestData): SignupFormValidationResult {
    for (const field of signupFormRequiredFields) {
        if (!data[field]) {
            return {
                type: `missing_${field}`,
                message: 'Please fill out this field.'
            };
        }
    }
    throw new Error('Unhandled field validation case. All fields are present but validation failed.');
}
