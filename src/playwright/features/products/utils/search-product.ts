import { ProductCard } from '@playwright-features/products/types/product.type';

export function filterProducts(products: ProductCard[], keyword: string): ProductCard[] {
  const lowerCaseKeyword = keyword.toLowerCase();
  return products.filter((product) => product.name.toLowerCase().includes(lowerCaseKeyword));
}

export function filterByKeyword(products: any[], keyword: string) {
  const lowerKeyword = keyword.toLowerCase();

  return products.filter((product) =>
    product.category.category.toLowerCase().includes(lowerKeyword),
  );
}
