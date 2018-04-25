const CountryData = require('./models/country_data.js');
const CountryView = require('./views/country_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const countryData = new CountryData();
  countryData.getData((data) => {
    countryView.populateDropdown(data);
  });
});
