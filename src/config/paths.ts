import path from 'path';

export const paths = {
  upload: {
    contactUs: path.resolve('src/features/contact-us/assets/ContactUs.txt'),
  },
  data: {
    login: {
      invalidUsers: path.resolve('src/features/auth/datas/invalid-users.csv'),
      registeredUsers: path.resolve('src/features/auth/datas/registered-users.csv'),
    },
    signup: {
      registerUsers: path.resolve('src/features/auth/datas/users.csv'),
    }
  },
};
