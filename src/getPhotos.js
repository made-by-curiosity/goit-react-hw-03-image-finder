import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35477319-8304939ba4ef8e390b1df04a7';

export function getPhotos(query, page) {
  return axios.get(BASE_URL, {
    params: {
      q: query,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
}
