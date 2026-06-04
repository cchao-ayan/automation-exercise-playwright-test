import { ValidationResult } from "../../../shared/types/validations/validation.type";
// ======================================================================//
// ===============      Signup Form Types and Interfaces       ===============//
// ======================================================================//

export interface SignupFormTestData {
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
}

export interface InvalidSignupFormTestData extends SignupFormTestData {
  error_message: string;
  internal_type: SignupFormInternalType;
}

export const signupFormFields = [
  'title',
  'name',
  'email',
  'password',
  'day',
  'month',
  'year',
  'newsletter',
  'offers',
  'firstname',
  'lastname',
  'company',
  'address1',
  'address2',
  'country',
  'state',
  'city',
  'zipcode',
  'mobile_number'] as const;

export type SignupFormFields = typeof signupFormFields[number];

export const signupFormRequiredFields = [
  'password',
  'firstname',
  'lastname',
  'address1',
  'country',
  'city',
  'state',
  'zipcode',
  'mobile_number'
] as const;

export type SignupFormRequiredFields = typeof signupFormRequiredFields[number];

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




