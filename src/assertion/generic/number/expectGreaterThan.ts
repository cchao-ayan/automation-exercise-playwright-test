import { expect } from "@playwright/test";

export function assertGreaterThan(actual: number, expected: number){
    expect(actual).toBeGreaterThan(expected);
}