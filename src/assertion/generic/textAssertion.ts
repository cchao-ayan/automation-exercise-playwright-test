import { expect } from "@playwright/test";

export function assertTextEquals(actual: string, expected: string){
    expect(actual).toBe(expected);
}