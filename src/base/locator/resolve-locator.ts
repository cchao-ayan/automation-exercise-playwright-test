import { Page, Locator } from '@playwright/test';
import { LocatorDefinition } from '@/base/locator';

export function resolve(
    page: Page | Locator,
    locator: LocatorDefinition
): Locator {

    switch (locator.type) {

        case 'role':
            return page.getByRole(locator.role, { name: locator.name });

        case 'testId':
            return page.getByTestId(locator.value);

        case 'text':
            return page.getByText(locator.value);

        case 'label':
            return page.getByLabel(locator.value);

        case 'css':
            return page.locator(locator.value);

        default:
            throw new Error(`Unsupported locator type`);
    }
}