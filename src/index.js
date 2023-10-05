// import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectBreeds = document.querySelector('.breed-select');
const divInfo = document.querySelector('.cat-info');

// axios.defaults.headers.common['x-api-key'] =
//   'live_AMLrPfX01FtvBBuAgX0BJ52Sy1lkfZAliQiB7rHAWRmx9PNtIcODyurwTTW1KQ50';

fetchBreeds()
  .then(array => {
    const markup = array
      .map(breed => `<option value='${breed.id}'>${breed.name}</option>`)
      .join('');
    selectBreeds.innerHTML = markup;
  })
  .catch(error => console.log(error));

// fetchCatByBreed();

// console.log(selectBreeds);
// console.log(selectBreeds.value);
