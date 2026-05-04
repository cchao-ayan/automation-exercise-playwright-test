export interface SignupModel {
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
