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
  const urlAddress = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return axios.get(urlAddress).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    const catData = response.data[0];
    const catInfo = {
      image: catData.url,
      name: catData.breeds[0].name,
      description: catData.breeds[0].description,
      temperament: catData.breeds[0].temperament,
    };

    return catInfo;
  });
};

export { fetchBreeds, fetchCatByBreed };
