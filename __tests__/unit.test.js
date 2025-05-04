// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


test('Valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123)-456-7890')).toBe(true);
});
test('Valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('Invalid phone number with no dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('Invalid phone number too short', () => {
  expect(isPhoneNumber('46-7890')).toBe(false);
});


test('Valid email with standard format', () => {
  expect(isEmail('user123@example.com')).toBe(true);
});
test('Valid email with underscore in domain', () => {
  expect(isEmail('john@my_domain.org')).toBe(true);
});
test('Invalid email with missing @', () => {
  expect(isEmail('userexample.com')).toBe(false);
});
test('Invalid email with long TLD', () => {
  expect(isEmail('user@example.corporate')).toBe(false);
});


test('Valid strong password 1', () => {
  expect(isStrongPassword('a1234')).toBe(true);
});
test('Valid strong password 2', () => {
  expect(isStrongPassword('Z_underscore_99')).toBe(true);
});
test('Invalid password starting with digit', () => {
  expect(isStrongPassword('1abcde')).toBe(false);
});
test('Invalid password with special character', () => {
  expect(isStrongPassword('abc$def')).toBe(false);
});


test('Valid date with single digits', () => {
  expect(isDate('1/1/2023')).toBe(true);
});
test('Valid date with double digits', () => {
  expect(isDate('12/25/2020')).toBe(true);
});
test('Invalid date with hyphens', () => {
  expect(isDate('12-25-2020')).toBe(false);
});
test('Invalid date with wrong year length', () => {
  expect(isDate('12/25/20')).toBe(false);
});


test('Valid 3-digit hex color with #', () => {
  expect(isHexColor('#0fA')).toBe(true);
});
test('Valid 6-digit hex color without #', () => {
  expect(isHexColor('abcdef')).toBe(true);
});
test('Invalid hex color with invalid character', () => {
  expect(isHexColor('#12345G')).toBe(false);
});
test('Invalid hex color with 4 digits', () => {
  expect(isHexColor('#abcd')).toBe(false);
});