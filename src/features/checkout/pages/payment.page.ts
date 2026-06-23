import { BasePage } from '@core/base/base.page';
import { routes } from '@config/routes';
import { Page, Locator, expect } from '@playwright/test';
import { cardDetailFields, CardDetailFields, CardDetails } from '../types/card-details.type';

export class PaymentPage extends BasePage {
    constructor(protected readonly page: Page) {
        super(page);
    }
    // ======================
    // Locators
    // ======================
    private readonly paymentBreadCrumb = this.page.getByText('Payment');
    private readonly paymentHeading = this.page.getByRole('heading', { name: 'Payment', level: 2 });
    private readonly homeLink = this.page.getByRole('link', { name: 'Home' });
    private readonly payAndConfirmOrderButton = this.page.getByRole('button', { name: 'Pay and Confirm Order' });
    // ======================
    // Locator Map
    // ======================  
    private readonly cardDetailLocators: Record<CardDetailFields, Locator> = {
        nameOnCard: this.page.getByTestId('name-on-card'),
        cardNumber: this.page.getByTestId('card-number'),
        cvc: this.page.getByTestId('cvc'),
        expiryMonth: this.page.getByTestId('expiry-month'),
        expiryYear: this.page.getByTestId('expiry-year')
    }

    // ======================
    // State Methods
    // ======================
    public async assertPageLoaded(): Promise<void> {
        await expect(this.page).toHaveURL(new RegExp(`${routes.checkout}$`));
        await expect(this.homeLink).toBeVisible();
        await expect(this.paymentBreadCrumb).toBeVisible();
        await expect(this.paymentHeading).toBeVisible();
    }
    public async clickPayAndConfirmOrderButton(): Promise<void> {
        await this.payAndConfirmOrderButton.click();
    }
    public async enterCardDetails(data: CardDetails): Promise<void> {
        for (const field of cardDetailFields) {
            await this.cardDetailLocators[field].fill(String(data[field]));
        }
    }
}