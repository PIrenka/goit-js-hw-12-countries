import countries from '../template/countries-list.hbs';
import country from '../template/country.hbs';
import { countryMarkupRef } from './refs';
import alert from './notify';

function updateCountriesList(data) {
  if (data.status === 404) {
    alert({
      type: 'notice',
      text: 'Nothing found, perhaps the name is incorrect.',
      delay: 2000,
      width: '300px',
      maxTextHeight: null,
    });
  }

  if (data.length === 1) {
    countryMarkupRef.insertAdjacentHTML('beforeend', country(data));
    alert({
      type: 'succes',
      text: 'The name is correct.',
      delay: 2000,
      width: '300px',
      maxTextHeight: null,
    });
    return;
  }

  if (data.length > 10) {
    alert({
      type: 'error',
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 2000,
      maxTextHeight: null,
    });
    return;
  }

  countryMarkupRef.insertAdjacentHTML('beforeend', countries(data));
  alert({
    type: 'notice',
    text: 'Please enter a more specific query!',
    delay: 2000,
    maxTextHeight: null,
  });
}

export default updateCountriesList;
