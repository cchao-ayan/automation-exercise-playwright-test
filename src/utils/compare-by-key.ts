import { expect } from '@playwright/test';
import { Logger } from './logger';

export function compareByKey(
  actual: any | any[],
  expected: any | any[],
  key: string | string[]
) {
  const keys = Array.isArray(key) ? key : [key];

  // when both actual and expected are arrays we compare collections by key(s)
  if (Array.isArray(actual) && Array.isArray(expected)) {
    expect(actual.length).toBe(expected.length);


    const map = new Map(
      actual.map(item => {
        const composite = keys.map(k => item[k]).join('|');
        return [composite, item];
      })
    );

    for (const exp of expected) {
      const composite = keys.map(k => exp[k]).join('|');
      const act = map.get(composite);

      expect(act).toBeDefined();
      expect(act).toEqual(exp);
    }
  } else {
    // treat as single objects - compare selected fields
    const actObj = actual;
    const expObj = expected;
    Logger.info(`Actual: ${JSON.stringify(actual)}`);
    Logger.info(`Expected: ${JSON.stringify(expected)}`);

    for (const k of keys) {
      expect(actObj[k]).toEqual(expObj[k]);
    }
  }
}
