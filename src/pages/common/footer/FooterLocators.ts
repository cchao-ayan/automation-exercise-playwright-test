import { Page } from '@playwright/test';

export const locators = {
  subscribeButton: '#subscribe',
};

export const playwrightLocators = {
  subscriptionHeading: (page: Page) => page.getByRole('heading', { name: 'Subscription' }),
  email: (page: Page) => page.getByRole('textbox', { name: 'Your email address' }),
  getUpdateText: (page: Page) =>
    page.getByText('Get the most recent updates from our site and be updated your self...', {
      exact: true,
    }),
};
