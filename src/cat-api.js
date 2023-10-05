import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_AMLrPfX01FtvBBuAgX0BJ52Sy1lkfZAliQiB7rHAWRmx9PNtIcODyurwTTW1KQ50';

const fetchBreeds = () => {
  return axios.get('https://api.thecatapi.com/v1/breeds').then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  });
};

const fetchCatByBreed = breedId => {
  const urlAddress = `https://api.thecatapi.com/v1/images/search?breed_ids=breedId`;
  return axios.get(urlAddress).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    // console.log(response);
  });
};

export { fetchBreeds, fetchCatByBreed };
