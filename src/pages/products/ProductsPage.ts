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
    console.log(`Featured Items Locator: ${featuredItems}`);
    return await featuredItems.count();
  }
  async getNameInnerText() {
    const featuredItems = locators.featuredItems(this.page).first();
    return await this.getInnerText(featuredItems.locator('h2').last());
  }
  /* Get Featured Product Item by Index */
  /* This will create an instance of ProductDetails for a specific featured product item and all its method will be available */
  async productAt(index: number) {
    const featuredItems = locators.featuredItems(this.page);
    return new ProductDetails(this.page, featuredItems.nth(index));
  }
  async getAllFeaturedProductItems() {
    const count = await this.getFeaturedProductItemCount();
    console.log(`Featured Product Items Count: ${count}`);
    await this.expectToBeGreaterThan(count);
    const details = await this.productAt(0);
    const productDetails = await details.getProductDetails();
    await this.expectToBe(productDetails.name, testData.featured_item1.name);
    await this.expectToBe(productDetails.price, testData.featured_item1.price);
    /*
        for (let i = 0; i < count; i++) {
            const product = this.getFeaturedProductItemByIndex(i);
            const details = await (await product).getProductDetails();

            await this.expectToBe(details.name, testData.featured_item1.name);
            await this.expectToBe(details.cost, testData.featured_item1.cost);
        }
            */
  }
}
