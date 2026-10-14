import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

iziToast.settings({ timeout: 5000, position: 'topRight' });

const form = document.querySelector('.form');
const searchButton = form.querySelector('button');

form.addEventListener('submit', event => {
  event.preventDefault();
  if (searchButton.disabled) return;

  const query = event.currentTarget.elements['search-text'].value.trim();
  if (!query) {
    iziToast.warning({ message: 'Please enter a search query.' });
    return;
  }

  clearGallery();
  showLoader();
  searchButton.disabled = true;

  getImagesByQuery(query)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      createGallery(hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'Unable to load images. Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
      searchButton.disabled = false;
    });
});
