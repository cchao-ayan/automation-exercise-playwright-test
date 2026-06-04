import { EmailValidationType } from "@shared/types/validations/email-validation.type";
import { ValidationResult } from "@shared/types/validations/validation.type";

// ======================================================================//
// ===============       Login Types and Interfaces       ===============//
// ======================================================================//
export interface InvalidLoginTestData {
  id: string;
  scenario: string;
  email?: string;
  password?: string;
  error_message: string;
  internal_type: LoginInternalType;
}

export interface LoginFieldsData {
  email?: string;
  password?: string;
}

export const loginFields = [
  'email',
  'password'
] as const;

export type LoginFields = typeof loginFields[number];

export type LoginInternalType =
  | EmailValidationType
  | 'missing_email_and_password'
  | 'missing_password'
  | 'invalid_credentials';

// Reusing the generic ValidationResult type for login validation results
export type LoginValidationResult = ValidationResult<LoginInternalType>;