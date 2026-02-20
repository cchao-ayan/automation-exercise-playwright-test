import { ProductBaseDTO } from './ProductBase.dto';

export interface ProductCardDTO extends ProductBaseDTO {
    brand?: string;    
    usertype?: string;
    category?: string;    
}