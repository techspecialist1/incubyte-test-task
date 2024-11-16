import {add} from '../../src/utils/stringCalculator';

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the number itself when a single number is provided', () => {
    expect(add('1')).toBe(1);
  });

  test('should return the sum of two numbers separated by a comma', () => {
    expect(add('1,2')).toBe(3);
  });

  test('should return the sum of multiple numbers separated by commas', () => {
    expect(add('1,2,3')).toBe(6);
  });

  test('should handle new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('should handle custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('should throw an exception for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('negative numbers not allowed: -2');
  });

  test('should show all negative numbers in the exception message', () => {
    expect(() => add('1,-2,-3')).toThrow(
      'negative numbers not allowed: -2, -3',
    );
  });
});
