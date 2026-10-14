import axios from 'axios';

const apiKey = '58027873-0f60407f98d7447dcb5a9b541';
const baseUrl = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(baseUrl, {
      params: {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
