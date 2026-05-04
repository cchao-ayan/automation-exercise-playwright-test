import { AuthFlow, ProductsFlow, CheckoutFlow } from '/flows/index';
import { POManager } from './pom.manager';

export class FlowManager {
  constructor(private readonly pom: POManager) {}

  private _auth?: AuthFlow;
  private _products?: ProductsFlow;
  private _checkout?: CheckoutFlow;

  get authFlow(): AuthFlow {
    return (this._auth ??= new AuthFlow(this.pom));
  }
  get productsFlow(): ProductsFlow {
    return (this._products ??= new ProductsFlow(this.pom));
  }
  get checkoutFlow(): CheckoutFlow {
    return (this._checkout ??= new CheckoutFlow(this.pom));
  }
}
