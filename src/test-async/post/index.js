const fetch = require('node-fetch');
const endpoint = 'https://jsonplaceholder.typicode.com';

function getPost(postId) {
  return fetch(endpoint + '/posts' + postId)
  .then(post => post.json());
}

module.exports = getPost;
