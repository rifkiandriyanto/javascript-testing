const greet = require('./index');

describe('Testing String', () => {
  test('should return capitalize', () => {
    expect(greet('bambang')).toBe('Hello, Bambang');
    expect(greet('BAMBANG')).toBe('Hello, Bambang');
    expect(greet('bAmbang')).toBe('Hello, Bambang');
    expect(greet('BambAnG')).toBe('Hello, Bambang');
    expect(greet('jhon Dow')).toBe('Hello, Jhon');
  });

  test('should return Hello Stranger', () => {
    expect(greet()).toBe('Hello, Stranger');
    expect(greet(' ')).toBe('Hello, Stranger');
  });

  test('should return wrong name', () => {
    expect(greet(1234)).toBe('Wrong Name');
  });
});
