const Request = require('../services/request.js');

const CountryData = function() {
  this.url = 'https://restcountries.eu/rest/v2/all';
  this.data = null;
}

CountryData.prototype.getData = function(onComplete) {
  const request = new Request(this.url);
  request.get((data) => {
    this.data = data;
    onComplete(data);
  });
}

module.exports = CountryData;
