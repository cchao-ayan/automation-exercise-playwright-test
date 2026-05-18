import { EmailValidationType } from "@shared/types/validations/email-validation.type";
import { ValidationResult } from "../../../shared/types/validations/validation.type";
// ======================================================================//
// ===============      Signup Form Types and Interfaces       ===============//
// ======================================================================//
export interface InvalidSignupFormTestData {
  id: string;
  scenario: string;
  title?: string;
  name: string;
  email: string;
  password: string;
  day?: string;
  month?: string;
  year?: string;
  newsletter?: boolean;
  offers?: boolean;
  firstname: string;
  lastname: string;
  company?: string;
  address1: string;
  address2?: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobile_number: string;
  error_message: string;
  internal_type: SignupFormInternalType;
}

export interface SignupFormMandatoryData {
  name: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  address1: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobile_number: string;
}

export type SignupFormFields =
  | 'title'
  | 'name'
  | 'email'
  | 'password'
  | 'day'
  | 'month'
  | 'year'
  | 'newsletter'
  | 'offers'
  | 'firstname'
  | 'lastname'
  | 'company'
  | 'address1'
  | 'address2'
  | 'country'
  | 'state'
  | 'city'
  | 'zipcode'
  | 'mobile_number';

export type SignupFormRequiredFields =
  | 'password'
  | 'firstname'
  | 'lastname'
  | 'address1'
  | 'country'
  | 'city'
  | 'state'
  | 'zipcode'
  | 'mobile_number';

export const signupFormRequiredFields: SignupFormRequiredFields[] = [
  'password',
  'firstname',
  'lastname',
  'address1',
  'country',
  'city',
  'state',
  'zipcode',
  'mobile_number'
];

export type SignupFormInternalType =
  | 'missing_password'
  | 'missing_firstname'
  | 'missing_lastname'
  | 'missing_address1'
  | 'missing_country'
  | 'missing_city'
  | 'missing_state'
  | 'missing_zipcode'
  | 'missing_mobile_number';

  // Reusing the generic ValidationResult type for signup form validation results
export type SignupFormValidationResult = ValidationResult<SignupFormInternalType>;




