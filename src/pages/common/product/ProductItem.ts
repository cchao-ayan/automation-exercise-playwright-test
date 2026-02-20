import { Page, Locator } from '@playwright/test';
import { ProductCardDTO } from '../../../dto/ProductCard.dto';
import { ProductDetailsDTO } from '../../../dto/ProductDetails.dto';
import { CommonPageMethods } from '../../base/CommonPageMethod';
import { locators } from './ProductItemLocators';

export class ProductItems extends CommonPageMethods {
  constructor(
    page: Page,
    protected root: Locator,
  ) {
    super(page);
  }

  // ---------- locators ----------
  getProductID(): Locator {
    return locators.productID(this.root);
  }
  getProductImage(): Locator {
    return locators.productImage(this.root);
  }
  getProducRatingImage(): Locator {
    return locators.productRating(this.root);
  }
  getProductName(): Locator {
    return locators.productName(this.root);
  }
  getProductPrice(): Locator {
    return locators.productPrice(this.root).first();
  }
  getProductCategory(): Locator {
    return locators.productCategory(this.root);
  }
  getProductAvailability(): Locator {
    return locators.productAvailability(this.root);
  }
  getProductCondition(): Locator {
    return locators.productCondition(this.root);
  }
  getProductBrand(): Locator {
    return locators.productBrand(this.root);
  }
  getProductQuantity(): Locator {
    return locators.productQuantity(this.root);
  }
  getProductQuantityLabel(): Locator {
    return locators.productQuantiyLabel(this.root);
  }
  getAddToCartButton(): Locator {
    return locators.addToCartButton(this.root);
  }

  // ---------- data readers ----------
  async getProductIDAttributeValue(): Promise<string | null> {
    //const attrib = await this.getProductID().getAttribute('data-product-id');
    //console.log('Getting product ID:', attrib);
    return await this.getProductID().getAttribute('data-product-id');
  }
  async getProductImageSrc(): Promise<string | null> {
    return this.getProductImage().getAttribute('src');
  }
  async getProductNameText(): Promise<string> {
    //const name = await this.getProductName().innerText();
    //console.log('Getting product name:', name);
    return await this.getProductName().innerText();
  }
  async getProductPriceText(): Promise<string> {
    //const price = await this.getProductPrice().innerText();
    //console.log('Getting product price:', price);    
    return await this.getProductPrice().innerText();
  }
  async getProductCategoryText(): Promise<string> {
    const fullString = await this.getProductCategory().innerText();
    const category = fullString.replace('Category:', '').trim();
    return category.split('>')[1].trim(); // Assuming format "Category: <category> > <userType>"
  }
  async getProductUserTypeText(): Promise<string> {
    const fullString = await this.getProductCategory().innerText();
    const userType = fullString.replace('Category:', '').trim();
    return userType.split('>')[0].trim(); // Assuming format "Category: <category> > <userType>"
  }
  async getProductRatingImageSrc(): Promise<string | null> {
    return this.getProducRatingImage().getAttribute('src');
  }
  async getProductQuantityText(): Promise<string> {
    return this.getProductQuantity().innerText();
  }
  async getProductAvailabilityText(): Promise<string> {
    return this.getProductAvailability().innerText();
  }
  async getProductConditionText(): Promise<string> {
    return this.getProductCondition().innerText();
  }
  async getProductBrandText(): Promise<string> {
    return this.getProductBrand().innerText();
  }
  async isProductQuantityLabelVisible(): Promise<boolean> {
    return this.getProductQuantityLabel().isVisible();
  }
  async isAddToCartButtonVisible(): Promise<boolean> {
    return this.getAddToCartButton().isVisible();
  }

  // ---------- DTO builders ----------
  async getCardDetails(): Promise<ProductCardDTO> {
    return {
      id: await this.getProductIDAttributeValue(),
      name: await this.getProductNameText(),
      price: await this.getProductPriceText()
    };
  }

  async getPageDetails(): Promise<ProductDetailsDTO> {
    return {
      id: await this.getProductIDAttributeValue(),
      name: await this.getProductNameText(),
      price: await this.getProductPriceText(),
      brand: await this.getProductBrandText(),
      category: await this.getProductCategoryText(),
      usertype: await this.getProductUserTypeText(),
    };
  }
}