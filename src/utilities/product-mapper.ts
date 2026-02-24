import { ProductDetailsDTO } from "../dto/ProductDetails.dto";

export function normalizeProductData(expected: any) {
  return {
    id: String(expected.id),
    name: expected.name,
    price: expected.price,
    brand: expected.brand,
    usertype: expected.category.usertype.usertype,
    category: expected.category.category
  };
}