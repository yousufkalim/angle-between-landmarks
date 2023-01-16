import { expect, test } from '@jest/globals';
import findAngle from '../src';

const landmarks1 = { x: 0, y: 0 };
const landmarks2 = { x: 1, y: 0 };
const landmarks3 = { x: 1, y: 1 };

test('Should test angle function with small', () => {
  expect(findAngle(landmarks1, landmarks2, landmarks3)).toBe(270);
});

test('Should test angle function with small', () => {
  expect(findAngle(landmarks1, landmarks2, landmarks3, { small: true, round: true })).toBe(90);
});
