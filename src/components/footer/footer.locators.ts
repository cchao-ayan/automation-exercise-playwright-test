import { Locator } from '@playwright/test';

export const FOOTER_LOCATORS = (root: Locator) => ({
    subscribeButton: root.locator('#subscribe'),
    subscriptionHeading:  root.getByRole('heading', { name: 'Subscription' }),
    emailInput:  root.getByRole('textbox', { name: 'Your email address' }),
    subscriptionDescription:  root.locator('p', { hasText: 'Get the most recent updates' }),
    successMessage:  root.locator('.alert-success alert')
});