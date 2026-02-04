import { BasePage } from '../base/BasePage';
import { ProductDetails } from '../common/product/ProductDetails';
import { locators } from './ProductsPageLocators';
import { testData } from './ProductsTestData';

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
    async verifyRecommendedItemsSectionIsVisible() {
        const recommendedItemsHeading = locators.recommendedItemsHeading(this.page);
        await this.expectVisible(recommendedItemsHeading);
        await this.expectHaveText(recommendedItemsHeading, 'Recommended Items');
    }

    async getFeaturedProductItemCount(): Promise<number> {
        const featuredItems = locators.featuredItems(this.page);
        return await featuredItems.count();
    }
    async getNameInnerText() {
        const featuredItems = locators.featuredItems(this.page).first();
        return await this.getInnerText(featuredItems.locator('h2').last());
    }
    /* Get Featured Product Item by Index */
    /* Returns a ProductDetails instance for a specific featured product item */
    productAt(index: number): ProductDetails {
        const featuredItems = locators.featuredItems(this.page);
        return new ProductDetails(this.page, featuredItems.nth(index));
    }
    /*
    async getProductDetailsFromCard(option: { scope: 'card'}): Promise<void> {
        const count = await this.getFeaturedProductItemCount();
        console.log(`Total Featured Items: ${count}`);
        await this.expectToBeGreaterThan(count);
        
        for (let i = 0; i < count; i++) {
            const product = this.productAt(i);
            const details = await product.getProductDetails(); 
            await this.expectToBe(details.name, testData.featured_item1.name);
            await this.expectToBe(details.price, testData.featured_item1.price);
        }
    }
    async getProductDetailsFromPage(option: { scope: 'card'}): Promise<void> {
        const count = await this.getFeaturedProductItemCount();
        console.log(`Total Featured Items: ${count}`);
        await this.expectToBeGreaterThan(count);

        for (let i = 0; i < count; i++) {
            const product = this.productAt(i);
            const details = await product.getProductDetails();

            await this.expectToBe(details.name, testData.featured_item1.name);
            await this.expectToBe(details.price, testData.featured_item1.price);
        }
    }
        
    async getProductDetailsFromCard(index: number) {
        const product = this.productAt(index);
        return await product.getProductDetails({ scope: 'card' });
    }
        */
    // Or get all products as array for comparison
    async getAllProductDetails(): Promise<Array<any>> {
        const count = await this.getFeaturedProductItemCount();
        const products = [];

        for (let i = 0; i < count; i++) {
            const product = this.productAt(i);
            const details = await product.getProductDetails({ scope: 'card' });
            products.push(details);
        }
        return products;
    }
    async compareProductDetailsWithTestData(): Promise<any> {
        const details = await this.getAllProductDetails();
        console.log('Product Details:', details);
        for (const detail of details) {
            await this.expectToBe(detail.image, testData.featured_item1.img);
            await this.expectToBe(detail.name, testData.featured_item1.name);
            await this.expectToBe(detail.price, testData.featured_item1.price);
        }

    }
}
