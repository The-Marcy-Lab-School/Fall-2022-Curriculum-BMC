/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  handleFetch,
  setNav,
  getFetchOptions,
} from './global.js';

const main = async () => {
  const user = await fetchLoggedInUser(); // GET api/me
  setNav(Boolean(user));

  const photoUrlForm = document.querySelector("#photo-url-form");
  const photoUrlInput = document.querySelector("#photo-url-input");
  photoUrlForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await fetch('/api/photos', getFetchOptions({ url: photoUrlInput.value }));
  });

  const [secret, _err] = await handleFetch('/api/logged-in-secret');
  console.log('secret, _err:', secret, _err);
  if (secret) {
    document.querySelector('#secret-message').textContent = secret.msg;
  }
};

main();
