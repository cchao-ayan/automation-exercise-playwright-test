import path from 'path';

export const paths = {
  upload: {
    contactUs: path.resolve('src/features/contact-us/assets/ContactUs.txt'),
  },
  data: {
    login: {
      invalidLoginInput: path.resolve('src/features/auth/datas/invalid/invalid-login-input.csv'),
      registeredUsers: path.resolve('src/features/auth/datas/valid/registered-users.csv'),
    },
    signup: {
      invalidSignupInput: path.resolve('src/features/auth/datas/invalid/invalid-signup-input.csv'),
      invalidSignupFormInput: path.resolve('src/features/auth/datas/invalid/invalid-signup-form-input.csv'),
      registerUsers: path.resolve('src/features/auth/datas/valid/valid-register-users.csv'),
    },
    footer: {
      invalidEmailFooter: path.resolve('src/shared/components/footer/invalid-email-footer.csv'),
    }
  },
};
