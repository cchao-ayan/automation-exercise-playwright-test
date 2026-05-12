import { LoginFieldsData, LoginValidationResult } from "../types/auth.type";
import { getFirstSpecialCharacterAfterAt } from "@shared/utils/data-helper";

export function validateLoginInput(data: LoginFieldsData): LoginValidationResult {
    const e = data.email ?? '';
    const p = data.password ?? '';
    if (!e && !p) {
        return {
            type: 'missing_email_and_password',
            message: 'Please fill out this field.'
        };
    }
    if (!e) {
        return {
            type: 'missing_email',
            message: 'Please fill out this field.'
        };
    }
    if (!p) {
        return {
            type: 'missing_password',
            message: 'Please fill out this field.'
        };
    }

    if (!e.includes('@')) {
        return {
            type: 'missing_at',
            message: `Please include an '@' in the email address. '${e}' is missing an '@'.`
        };
    }
    if (e.startsWith('@')) {
        return {
            type: 'missing_before_at',
            message: `Please enter a part followed by '@'. '${e}' is incomplete.`
        };
    }
    if (e.endsWith('@')) {
        return {
            type: 'missing_after_at',
            message: `Please enter a part following '@'. '${e}' is incomplete.`
        };
    }
    const specialCharAfterAt = getFirstSpecialCharacterAfterAt(e);
    if (specialCharAfterAt) {
        return {
            type: 'special_char_after_at',
            message: `A part following '@' should not contain the symbol '${specialCharAfterAt}'.`
        };
    }
    return {
        type: 'invalid_credentials',
        message: 'Your email or password is incorrect!'
    }; 
}