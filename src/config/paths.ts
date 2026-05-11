import path from 'path';

export const paths = {
  upload: {
    contactUs: path.resolve('src/features/contact-us/assets/ContactUs.txt'),
  },
  data: {
    login: {
      invalidUsers: path.resolve('src/features/auth/datas/invalid-login-users.csv'),
      registeredUsers: path.resolve('src/features/auth/datas/registered-users.csv'),
    },
    signup: {
      invalidSignupUsers: path.resolve('src/features/auth/datas/invalid-signup-users.csv'),
      registerUsers: path.resolve('src/features/auth/datas/register-users.csv'),
    }
  },
};
