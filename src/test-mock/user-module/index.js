const request = require('./request');
const _ = require('lodash')
function getUser() {
  const users = request();
  return _.head(users)
}

module.exports = getUser;
