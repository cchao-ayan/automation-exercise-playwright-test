import { ProductBaseDTO } from './ProductBase.dto';

export interface ProductDetailsDTO extends ProductBaseDTO {
    category: string;
    rating: string | null;
    quantityLabel: boolean;
    quantity: string;
    addToCart: boolean;
    availability: string;
    condition: string;
    brand: string;
    //[key: string]: any; // Allow additional properties
}
