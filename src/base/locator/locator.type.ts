import { Page } from '@playwright/test';

// Extracts the ARIA role type from Playwright's page.getByRole()
// ensuring locator definitions stay consistent with Playwright
export type AriaRole = Parameters<Page['getByRole']>[0]; 

export type RoleLocator = {
  type: 'role';
  role: AriaRole;
  name: string;
};

export type TestIdLocator = {
  type: 'testId';
  value: string;
};

export type TextLocator = {
  type: 'text';
  value: string;
};

export type LabelLocator = {
  type: 'label';
  value: string;
};

export type CssLocator = {
    type: 'css';
    value: string;
}

// this is for the resolve-locator.ts 
export type LocatorDefinition =
  | RoleLocator
  | TestIdLocator
  | TextLocator
  | LabelLocator
  | CssLocator;