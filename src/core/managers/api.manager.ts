import { ProductAPI } from "@features/products/api/product.api";
import { APIRequestContext } from "@playwright/test";

export class APIManager {
    constructor(private readonly request: APIRequestContext) {}

    private _product?: ProductAPI;

    public get product(): ProductAPI {
        return (this._product ??= new ProductAPI(this.request));
    }
}