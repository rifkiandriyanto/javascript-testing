const request = require('./index');

describe('testing exception', () => {
  test('should return error', () => {
      expect(request).toThrow('url empty');
  });

  test('should return success', () => {
      expect(request('http:myurl.com')).toBe('success');
  });
});
