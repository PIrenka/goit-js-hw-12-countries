import { searchContainerRef, inputRef, btnRef, countryMarkupRef } from './refs';
import debounce from 'lodash/debounce';
import fetchCountries from './fetchCountries';
import updateCountriesList from './countriesLoading';

inputRef.addEventListener('input', debounce(searchCountry, 500));
searchContainerRef.addEventListener('submit', event => {
  event.preventDefault();
});

function searchCountry() {
  countryMarkupRef.innerHTML = '';
  if (inputRef.value !== '') {
    return fetchCountries
      .fetchCountries(inputRef.value)
      .then(data => updateCountriesList(data))
      .catch(error => {
        console.warn(error);
      });
  }
}
