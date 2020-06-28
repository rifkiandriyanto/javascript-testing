const request = require('./request');
function getUser() {
  const users = request();
  return users[0];
}

module.exports = getUser;
