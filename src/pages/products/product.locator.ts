import { Page } from '@playwright/test';

export const PRODUCT = (page: Page) => ({
    section: {
        featureItems: page.getByRole('heading', { name: 'Features Items' }),
        allProducts: page.getByRole('heading', { name: 'All Products' }),
        category: page.getByRole('heading', { name: 'Category' }),
        brand: page.getByRole('heading', { name: 'Brands' }),
        searchProduct: page.getByRole('heading', { name: 'Searched Products' }),
        recommended: page.locator('div.recommended-items'),
    },
    button: {
        addToCart: page.getByRole('button', { name: 'Add to cart' }),

        search: page.locator('#submit_search'),
    },
    input: {
        searchProduct: page.getByRole('textbox', { name: 'Search Product' }),
    },
    text: {
        id: page.locator('a').first(), //.first(),
        name: page.locator('p').first(), //.first(),
        price: page.locator('Rs.'),
    },
    image: {
        product: page.locator('img').first()
    },
    link: {
        polo: page.getByRole('link', { name: 'Polo' }),
        view: page.getByRole('link', { name: 'View Product' })
    },
    container: {
        product: page.locator('.features_items'),
        perPoduct: page.locator('.col-sm-4'),
        singleProduct: page.locator('.single-products')
    }
});

