const CountriesView = function (countriesDropdown) {
  this.countriesDropdown = countriesDropdown;
}

CountriesView.prototype.renderCountriesDropdown = function (countriesData) {
  countriesData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.countriesDropdown.appendChild(option);
  });
}

CountriesView.prototype.renderBucketCountryDetail = function(country) {
  const ul = document.querySelector('#bucket-list');
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.classList.add('country-detail');

  const name = document.createElement('h3');
  name.textContent = country.name;
  div.appendChild(name);

  const flagImage = document.createElement('img');
  flagImage.src = country.flag;
  flagImage.classList.add('flag');
  div.appendChild(flagImage);

  li.appendChild(div);
  ul.appendChild(li);
}

module.exports = CountriesView;
