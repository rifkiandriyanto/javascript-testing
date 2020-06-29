jest.mock('node-fetch');
const getPost = require('./index');

describe('Async Testing', () => {
  const expectedValue = {
    userId: 1,
    id: 1,
    title:
      'mock - sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };

    test('works with promise', () => {
      expect.assertions(1);
      return getPost(1).then( data => {
        expect(data).toEqual(expectedValue);
      });
    });

  test('work with async/await', async () => {
    const result = await getPost(1);
    expect(result).toEqual(expectedValue);
  });
});
