const Request = require('./services/request.js');
const CountriesData = require('./models/countries_data.js');
const CountriesView = require('./views/countries_view.js');

const request = new Request('http://localhost:3000/db/countries');

document.addEventListener('DOMContentLoaded', () => {

  const countrySelect = document.querySelector('#country-select');

  const countriesData = new CountriesData();
  const countriesView = new CountriesView(countrySelect);

  countriesView.countriesDropdown.addEventListener('change', (event) => {
    const index = event.target.value;
    const country = countriesData.data[index];
    request.post(country, (returned_country) => {
      countriesView.renderBucketCountryDetail(returned_country);
    });
  });

  const bucketCountriesData = request.get((countries) => {
    countries.forEach((country) => {
      countriesView.renderBucketCountryDetail(country);
    });
  });

  countriesData.getData((data) => {
    countriesView.renderCountriesDropdown(data);
  });

});
