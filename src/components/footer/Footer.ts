import { Page } from '@playwright/test';
import { CommonPageMethods } from '../../pages/base/CommonPageMethods';

export class Footer extends CommonPageMethods {
  constructor(page: Page) {
    super(page);
  }
}
