import { validateEmailFormat } from '@shared/types/validators/email.validator';
import { FooterFieldData, FooterValidationResult } from '@shared/components/footer/footer.type';

export function validateFooterInput(data: FooterFieldData): FooterValidationResult {
    const e = data.email ?? '';
    const emailValidation = validateEmailFormat(e);
    if (emailValidation) {
        return emailValidation;
    }
    return {
        type: 'valid_email',
        message: 'Email Address is valid!'
    };
}