import { Page, Locator } from '@playwright/test';
import { resolve, LocatorDefinition } from '@/base/locator';

export class LocatorFactory {

    constructor(private readonly page: Page | Locator) { }

    public create(locator: LocatorDefinition): Locator {
        return resolve(this.page, locator);
    }
    /*
        public get<T extends LocatorDefinition>(locator: T): Locator {
        return resolveLocator(this.page, locator);
      }
        */

  /**
   * Create a new scoped factory from a locator definition
   * Useful for components and nested DOM sections
   */
  public within(definition: LocatorDefinition): LocatorFactory {
    const scoped = this.create(definition);
    return new LocatorFactory(scoped);
  }

  /**
   * Create a factory from an existing Locator
   */
  public from(locator: Locator): LocatorFactory {
    return new LocatorFactory(locator);
  }
}