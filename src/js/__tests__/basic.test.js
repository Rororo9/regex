import Validator from '../app.js';

test('valid nickname', () => {
  expect(new Validator().validateUsername('Rororo')).toBe(true);
});

test('больше трех цифр подряд', () => {
  expect(new Validator().validateUsername('Rororo1234')).toBe(false);
});

test('', () => {
  expect(new Validator().validateUsername('12rororo')).toBe(false);
});

test('', () => {
  expect(new Validator().validateUsername('rororo1')).toBe(false);
});

test('', () => {
  expect(new Validator().validateUsername('_rororo')).toBe(false);
});

test('', () => {
  expect(new Validator().validateUsername('rororo_')).toBe(false);
});

test('', () => {
  expect(new Validator().validateUsername('--rororo')).toBe(false);
});

test('', () => {
  expect(new Validator().validateUsername('rororo--')).toBe(false);
});
