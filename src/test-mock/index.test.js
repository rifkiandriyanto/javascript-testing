const mockFunction = jest
  .fn()
  .mockReturnValue('Hello') //  default call
  .mockReturnValueOnce('first call') // capture call
  .mockReturnValueOnce('second call');

describe('Testing Mock Function', () => {
  test('mock #1', () => {
    expect(mockFunction()).toBe('first call');
  });

  test('testing #2', () => {
    expect(mockFunction()).toBe('second call');
  });

  test('testing #3', () => {
    expect(mockFunction()).toBe('Hello');
  });

  test('should call', () => {
    expect(mockFunction).toHaveBeenCalled(); // return call
  });

  test('should call all function', () => {
    expect(mockFunction).toHaveBeenCalledTimes(3); //   call 3 times function
  });
});
