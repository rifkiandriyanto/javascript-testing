function fetch() {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () => (
        {
            "userId": 1,
            "id": 1,
            "title": "mock - sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          }
    ),
  });
}

module.exports = fetch;
