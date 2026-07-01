import path from 'path';

export const paths = {
  upload: {
    contactUs: path.resolve('src/playwright/features/contact-us/assets/ContactUs.txt'),
  },
  data: {
    login: {
      invalidLoginInput: path.resolve('src/playwright/features/auth/datas/invalid/invalid-login-input.csv'),
      registeredUsers: path.resolve('src/playwright/features/auth/datas/valid/registered-users.csv'),
    },
    signup: {
      invalidSignupInput: path.resolve('src/playwright/features/auth/datas/invalid/invalid-signup-input.csv'),
      invalidSignupFormInput: path.resolve('src/playwright/features/auth/datas/invalid/invalid-signup-form-input.csv'),
      registerUsers: path.resolve('src/playwright/features/auth/datas/valid/valid-register-users.csv'),
    },
    footer: {
      invalidEmailFooter: path.resolve('src/playwright/shared/components/footer/invalid-email-footer.csv'),
    }
  },
  setup: {
    storageState: path.resolve('src/playwright/.auth/auth.json')
  }
};
