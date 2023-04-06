import {expect, test} from '@jest/globals';
import sum from '../main';

test('add sum function', () => {
  expect(sum(1, 2)).toBe(3);
});