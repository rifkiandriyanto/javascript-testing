const sum = require('./index');

function mySum(a, b) {
  return a + b;
}

const mockSum = jest.fn(mySum);
describe('Testing NUmber', () => {
  test('Test #1', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('Test #2', () => {
    expect(sum(2, 3)).toBeGreaterThan(3);
  });

  test('Test #3', () => {
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
  });

  test('Test #4', () => {
    expect(sum(2, 3)).toBeLessThan(6);
  });

  test('Test #4', () => {
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });
});
