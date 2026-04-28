import { Locator } from '@playwright/test';

export class FooterLocators {
    constructor(private readonly root: Locator){}

    readonly subscribeButton = this.root.locator('#subscribe');
    readonly subscriptionHeading = this.root.getByRole('heading', { name: 'Subscription' });
    readonly emailInput = this.root.getByRole('textbox', { name: 'Your email address' });
    readonly subscriptionDescription = this.root.locator('p', { hasText: 'Get the most recent updates' });
    readonly successMessage = this.root.locator('.alert-success alert');

}