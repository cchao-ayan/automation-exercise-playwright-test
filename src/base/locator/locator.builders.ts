import { AriaRole, RoleLocator, TestIdLocator, TextLocator, LabelLocator, CssLocator } from '@/base/locator'

/**
 * Generic role builder
 */
export const role = (role: AriaRole, name: string): RoleLocator => ({
    type: 'role',
    role,
    name
});

/**
 * Other locator builders
 */
export const testId = (value: string): TestIdLocator => ({
    type: 'testId',
    value
});

export const text = (value: string): TextLocator => ({
    type: 'text',
    value
});

export const label = (value: string): LabelLocator => ({
    type: 'label',
    value
});

export const css = (value: string): CssLocator => ({
    type: 'css',
    value
});



// /**
//  * Typed role shortcuts
//  */
// const createRole = (role: AriaRole) => {
//     return (name: string): RoleLocator => ({
//         type: 'role',
//         role,
//         name
//     });
// };

// export const button = createRole('button');
// export const textbox = createRole('textbox');
// export const link = createRole('link');
// export const checkbox = createRole('checkbox');
// export const radio = createRole('radio');
// export const heading = createRole('heading');
// export const img = createRole('img');
// export const combobox = createRole('combobox');
// export const menuitem = createRole('menuitem');
