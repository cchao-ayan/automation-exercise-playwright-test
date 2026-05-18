import path from 'path';

export const paths = {
  upload: {
    contactUs: path.resolve('src/features/contact-us/assets/ContactUs.txt'),
  },
  data: {
    login: {
      invalidLoginInput: path.resolve('src/features/auth/datas/invalid-login-input.csv'),
      registeredUsers: path.resolve('src/features/auth/datas/registered-users.csv'),
    },
    signup: {
      invalidSignupInput: path.resolve('src/features/auth/datas/invalid-signup-input.csv'),
      invalidSignupFormInput: path.resolve('src/features/auth/datas/invalid-signup-form-input.csv'),
      registerUsers: path.resolve('src/features/auth/datas/register-users.csv'),
    }
  },
};
