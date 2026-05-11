import { InvalidSignupTestData, SignupValidationResult, signupRequiredFields } from "../types/auth.type";

export function validateSignupInput(data: InvalidSignupTestData): SignupValidationResult {
    for (const field of signupRequiredFields) {
        if (!data[field]) {
            return {
                type: `missing_${field}`,
                message: 'Please fill out this field.'
            };
        }
    }
    throw new Error('Unhandled field validation case. All fields are present but validation failed.');
}
