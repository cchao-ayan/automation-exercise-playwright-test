export interface Signup {
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

export interface InvalidCredentialScenario {
  id: string;
  scenario: string;
  email?: string;
  password?: string;
  error_message: string;
  internal_type: string;
}

export interface LoginInternalType {
  type:
    | 'missing_email'
    | 'missing_email_and_password'
    | 'missing_password'
    | 'missing_at'
    | 'missing_before_at'
    | 'missing_after_at'
    | 'invalid_credentials';

  message: string;
}

export type LoginFields =
  | 'email' 
  | 'password';

