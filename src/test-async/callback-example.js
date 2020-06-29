function sumSync(a, b, callback) {
  const result = a + b;
  return callback(result);
}

function sumAsync(a, b, callback) {
  const result = a + b;
  setTimeout(() => {
    return callback(result);
  }, 500);
}

module.exports = {
    sumSync,
    sumAsync
}
