const getUser = require('./index');
jest.mock('./request.js')
describe('test get user', () => {
  const exceptedValue = { id: 1, name: 'mock 1' };
  test('should return user 1', () => {
    expect(getUser()).toEqual(exceptedValue);
  });
});
