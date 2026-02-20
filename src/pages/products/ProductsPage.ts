import { BasePage } from '../base/BasePage';
import { ProductItems } from '../common/product/ProductItem';
import { locators } from './ProductsPageLocators';
import data from '../../test-data/ProductsTestData.json';
import { assertGreaterThan, assertTextEquals } from '../../assertion/generic';
import { compareByKey } from '../../utilities/compare-by-key';
import { pickFields } from '../../utilities/pick-fields';


export class ProductsPage extends BasePage {
    async ready() {
        await this.verifyProductsPageUrl('https://automationexercise.com/products');
        await this.header.verifyLogoIsVisible();
        await this.verifyCategorySectionIsVisible();
        await this.verifyBrandSectionIsVisible();
        //   await this.verifyAllProductsSectionIsVisible();
    }
    async clickPololink() {
        await this.click(locators.poloLink(this.page));
    }
    async navigateToProductsPage(url: string) {
        await this.goToUrl(url);
    }
    async verifyProductsPageUrl(expectedUrl: string) {
        await this.expectUrl(expectedUrl);
    }
    async verifyCategorySectionIsVisible() {
        const categoryHeading = locators.categoryHeading(this.page);
        await this.expectVisible(categoryHeading);
        await this.expectHaveText(categoryHeading, 'Category');
    }
    async verifyBrandSectionIsVisible() {
        const brandHeading = locators.brandHeading(this.page);
        await this.expectVisible(brandHeading);
        await this.expectHaveText(brandHeading, 'Brands');
    }
    async verifyAllProductsSectionIsVisible() {
        const allProductsHeading = locators.allProductsHeading(this.page);
        await this.expectVisible(allProductsHeading);
        await this.expectHaveText(allProductsHeading, 'All Products');
    }
    async verifyFeaturedItemsSectionIsVisible() {
        const featuredItemsHeading = locators.featureItemsHeading(this.page);
        await this.expectVisible(featuredItemsHeading);
        await this.expectHaveText(featuredItemsHeading, 'Features Items');
    }
    async getFeaturedProductItemCount(): Promise<number> {
        return await locators.featuredItems(this.page).count();
    }
    async getNameInnerText(): Promise<string> {
        const featuredItems = locators.featuredItems(this.page).first();
        return await featuredItems.locator('h2').last().innerText();
    }
    /* Get Featured Product Item by Index */
    /* Returns a ProductDetails instance for a specific featured product item */
    productAt(index: number): ProductItems {
        const featuredItems = locators.featuredItems(this.page);
        return new ProductItems(this.page, featuredItems.nth(index));
    }

    async verifyProductCardDetailsAreCorrect(): Promise<void> {
        const count = await this.getFeaturedProductItemCount();
        console.log(`Found ${count} featured product items on the page.`);
        for (let i = 0; i < count; i++) {
            const cardDetail = this.productAt(i);
            const actualCard = await cardDetail.getCardDetails();
            const expectedCard = pickFields(data[i], ['id', 'name', 'price']); // Assuming test data is in the same order as the products on the page
            // Compare only id, name, and price for the card details
            compareByKey(actualCard, expectedCard, ['id', 'name', 'price']);
        }

    }
}
