const { isEven, isOdd } = require('./index.js');

describe('Even & Odd Number', () => {
  test('should return true if number is even', () => {
    const result = isEven(2);
    expect(result).toBeTruthy();
    expect(result).not.toBeFalsy();
  });

  test('should return true if number is odd', () => {
    const result = isOdd(5);
    expect(result).toBeTruthy();
    expect(result).not.toBeFalsy();
  });
});
