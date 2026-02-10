import { Page, Locator } from '@playwright/test';
import { ProductCardDTO } from '../../../dto/ProductCard.dto';
import { ProductDetailsDTO } from '../../../dto/ProductDetails.dto';
import { CommonPageMethods } from '../../base/CommonPageMethod';
import { locators } from './ProductItemLocators';

export class ProductDetails extends CommonPageMethods {
  constructor(
    page: Page,
    protected root: Locator,
  ) {
    super(page);
  }

  // ---------- locators ----------
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
    return locators.productPrice(this.root);
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
  async getProductImageSrc(): Promise<string | null> {
    return this.getProductImage().getAttribute('src');
  }
  async getProductNameText(): Promise<string> {
    return this.getProductName().innerText();
  }
  async getProductPriceText(): Promise<string> {
    return this.getProductPrice().innerText();
  }
  async getProductCategoryText(): Promise<string> {
    return this.getProductCategory().innerText();
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
      name: await this.getProductNameText(),
      price: await this.getProductPriceText(),
      imageUrl: await this.getProductImageSrc(),
      /*
      category: await this.getProductCategoryText(),
      rating: await this.getProductRatingImage(),
      quantity: await this.getProductQuantityText(),
      availability: await this.getProductAvailabilityText(),
      condition: await this.getProductConditionText(),
      brand: await this.getProductBrandText(),
      quantityLabel: await this.getProductQuantityLabelText(),
      addToCart: await this.isAddToCartButtonVisible(),
      */
    };
  }

  async getPageDetails(): Promise<ProductDetailsDTO> {
    return {
      name: await this.getProductNameText(),
      price: await this.getProductPriceText(),
      imageUrl: await this.getProductImageSrc(),
      category: await this.getProductCategoryText(),
      rating: await this.getProductRatingImageSrc(),
      quantity: await this.getProductQuantityText(),
      availability: await this.getProductAvailabilityText(),
      condition: await this.getProductConditionText(),
      brand: await this.getProductBrandText(),
      quantityLabel: await this.isProductQuantityLabelVisible(),
      addToCart: await this.isAddToCartButtonVisible(),
    };
  }
}