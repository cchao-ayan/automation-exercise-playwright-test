import { Page } from '@playwright/test';

export const locators = {
  testCaseHeading: (page: Page) => page.getByRole('heading', { name: 'Test Cases', level: 2 }),
  feedbackHeading: (page: Page) => page.getByRole('heading', { name: 'Feedback For Us' }),
};
