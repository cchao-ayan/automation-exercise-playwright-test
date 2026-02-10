import { Page } from '@playwright/test';
import { CommonPageMethods } from '../../pages/base/CommonPageMethod';

export class Footer extends CommonPageMethods {
  constructor(page: Page) {
    super(page);
  }
}
