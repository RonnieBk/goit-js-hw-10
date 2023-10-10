// imports
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

const selectBreeds = document.querySelector('.breed-select');
const divInfo = document.querySelector('.cat-info');
const loaderText = document.querySelector('.loader');

loadingList();

selectBreeds.addEventListener('change', selectionHandler);

function loadingList() {
  selectBreeds.classList.add('hidden');
  fetchBreeds()
    .then(data => {
      selectBreeds.classList.remove('hidden');
      loaderText.classList.toggle('hidden');
      const markup = data
        .map(breed => `<option value='${breed.id}'>${breed.name}</option>`)
        .join('');
      selectBreeds.innerHTML = markup;
      new SlimSelect({
        select: selectBreeds,
      });
    })
    .catch(error => {
      loaderText.classList.toggle('hidden');
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
      console.log(error);
    });
}
function selectionHandler() {
  divInfo.classList.add('hidden');
  loaderText.classList.toggle('hidden');
  fetchCatByBreed(selectBreeds.value)
    .then(({ name, image, description, temperament }) => {
      divInfo.classList.toggle('hidden');
      loaderText.classList.toggle('hidden');
      const markup = `<img class='cat-image' src='${image}' alt='${name}'><div class='text-wrapper'><h2>${name}</h2><p>${description}</p><p><b>Temperament:</b> ${temperament}</p></div>`;
      divInfo.innerHTML = markup;
    })
    .catch(error => {
      loaderText.classList.toggle('hidden');
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
      console.log(error);
    });
}
