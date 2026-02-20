import { ProductBaseDTO } from './ProductBase.dto';

export interface ProductDetailsDTO extends ProductBaseDTO {
    brand: string;    
    usertype: string;
    category: string;    
}
  