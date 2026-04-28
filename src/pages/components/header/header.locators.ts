import { Locator } from '@playwright/test';

export class HeaderLocators {
    constructor(private readonly root: Locator){}

        readonly logoLink = this.root.getByRole('link', { name: 'Website for practice' });
        readonly homeLink = this.root.getByRole('link', { name: 'Home' });
        readonly productsLink = this.root.getByRole('link', { name: 'Products' });
        readonly cartLink = this.root.getByRole('link', { name: 'Cart' });
        readonly signupLoginLink = this.root.getByRole('link', { name: 'Signup / Login' });
        readonly testCaseLink = this.root.getByRole('link', { name: 'Test Cases' });
        readonly apiTestingLink = this.root.getByRole('link', { name: 'API Testing' });
        readonly videoTutorialLink = this.root.getByRole('link', { name: 'Video Tutorials' });
        readonly contactUsLink = this.root.getByRole('link', { name: 'Contact us' });
        readonly deleteAccountLink = this.root.getByRole('link', { name: 'Delete Account' });
        readonly logoutLink = this.root.getByRole('link', { name: 'Logout' });
        readonly logoImage = this.root.locator('img[src*="/home/logo.png"]');
        readonly loggedInAsText = this.root.getByText('Logged in as');

}




