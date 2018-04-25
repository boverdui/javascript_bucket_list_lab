const CountryView = function() {
}

CountryView.prototype.populateDropdown = function (countries) {
  const dropdown = document.querySelector('#dropdown-countries');
  for(let i = 0; i < countries.length; i++) {
    let option;
    option = document.createElement('option');
    option.text = countries[i].name;
    option.value = i;
    dropdown.add(option);
  }
}

module.exports = CountryView;
