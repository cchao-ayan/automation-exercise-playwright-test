import { AuthFlow } from '@features/auth/flows - not used/auth.flow';
import { ProductsFlow } from '@features/products/flows/products.flow';
import { CheckoutFlow } from '@features/checkout/flows/checkout.flow';
import { POManager } from './pom.manager';

export class FlowManager {
  constructor(private readonly pom: POManager) {}

  private _auth?: AuthFlow;
  private _products?: ProductsFlow;
  private _checkout?: CheckoutFlow;

  public get authFlow(): AuthFlow {
    return (this._auth ??= new AuthFlow(this.pom));
  }
  public get productsFlow(): ProductsFlow {
    return (this._products ??= new ProductsFlow(this.pom));
  }
  public get checkoutFlow(): CheckoutFlow {
    return (this._checkout ??= new CheckoutFlow(this.pom));
  }
}
