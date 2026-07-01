import { EmailValidationType } from "../../../shared/types/validations/email-validation.type";
import { ValidationResult } from "../../../shared/types/validations/validation.type";

// ======================================================================//
// ===============      Signup Types and Interfaces       ===============//
// ======================================================================//
export interface InvalidSignupTestData {
  id: string;
  scenario: string;
  name?: string;
  email?: string;
  error_message: string;
  internal_type: SignupInternalType;
}

export interface SignupFieldsData {
  name?: string;
  email?: string;
}

export const signupFields = [
  'name',
  'email'
] as const;

export type SignupFields = typeof signupFields[number];

export type SignupInternalType =
  | EmailValidationType
  | 'missing_name'
  | 'missing_email'
  | 'missing_name_and_email'
  | 'email_exists';

// Reusing the generic ValidationResult type for signup validation results
export type SignupValidationResult = ValidationResult<SignupInternalType>;
