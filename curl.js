const request = require("request");

module.exports = function curl(url) {
  console.log(request(url));
};
