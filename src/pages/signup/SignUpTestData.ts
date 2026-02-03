import { testCredentials } from '../../config/TestCredentials';

export const testData = {
  signUp: {
    title: 'Mrs',
    name: 'Elizabeth',
    email: testCredentials.email1,
    password: testCredentials.password,
    day: '15',
    month: 'May',
    year: '1990',
    firstName: 'Elizabeth',
    lastName: 'Andromeda',
    company: 'Galaxy Corp',
    address1: '123 Star Lane',
    address2: 'Unit 45',
    country: 'Canada',
    state: 'Aurora',
    city: 'Aurora',
    zipcode: '23001',
    mobileNumber: '123456789123',
  },

  credential: {
    email: testCredentials.email1,
    password: testCredentials.password,
  },
};
