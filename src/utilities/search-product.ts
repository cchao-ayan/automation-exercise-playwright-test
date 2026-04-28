import { ProductCardDTO } from "../models/product-card.model";

export function filterProducts(products: ProductCardDTO[], keyword: string): ProductCardDTO[] {
    const lowerCaseKeyword = keyword.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(lowerCaseKeyword)
    );
}

export function filterByKeyword(products: any[], keyword: string) {
  const lowerKeyword = keyword.toLowerCase();

  return products.filter(product =>
    product.category.category.toLowerCase().includes(lowerKeyword)
  );
}
