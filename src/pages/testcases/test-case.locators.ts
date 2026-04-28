import { Page } from '@playwright/test';

export class TestCaseLocators{
    constructor(private readonly page: Page){}

      readonly testCaseHeading = this.page.getByRole('heading', { name: 'Test Cases', level: 2 });
      readonly feedbackHeading = this.page.getByRole('heading', { name: 'Feedback For Us' });
}