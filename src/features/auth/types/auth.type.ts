// ======================================================================//
// ===============      Signup Types and Interfaces       ===============//
// ======================================================================//
export interface InvalidSignupTestData {
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
  internal_type: SignupInternalType;
}

export interface SignupMandatoryData {
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

export type SignupFields =
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

export type SignupRequiredFields =
  | 'password'
  | 'firstname'
  | 'lastname'
  | 'address1'
  | 'country'
  | 'state'
  | 'zipcode'
  | 'mobile_number';

export const signupRequiredFields: SignupRequiredFields[] = [
  'password',
  'firstname',
  'lastname',
  'address1',
  'country',
  'state',
  'zipcode',
  'mobile_number'
];

export type SignupInternalType =
  | 'missing_password'
  | 'missing_firstname'
  | 'missing_lastname'
  | 'missing_address1'
  | 'missing_country'
  | 'missing_state'
  | 'missing_zipcode'
  | 'missing_mobile_number';

export interface SignupValidationResult {
  type: SignupInternalType;
  message: string;
}

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

export type LoginFields =
  | 'email'
  | 'password';

export type LoginInternalType =
  | 'missing_email'
  | 'missing_email_and_password'
  | 'missing_password'
  | 'missing_at'
  | 'missing_before_at'
  | 'missing_after_at'
  | 'special_char_after_at'
  | 'invalid_credentials';

export interface LoginValidationResult {
  type: LoginInternalType;
  message: string;
}



