/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  getFetchOptions,
  // handleFetch,
  setNav,
} from './global.js';

const main = async () => {
  const user = await fetchLoggedInUser();
  setNav(!!user);

  const handlePhotoSubmit = async (e) => {
    e.preventDefault();
    const url = document.querySelector('#url-input').value;

    const body = { url };
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include', // includes cookies in the request
    };

    const response = await fetch('/api/photos', options);
    const data = await response.json();
    console.log(data);

    const img = document.createElement('img');
    img.src = data.url;
    document.querySelector('main').append(img);
  };

  document.querySelector("#upload-photos-form").addEventListener('submit', handlePhotoSubmit);

  // const [secret, _err] = await handleFetch('/api/logged-in-secret');
  // console.log('secret, _err:', secret, _err);
  // if (secret) {
  //   document.querySelector('#secret-message').textContent = secret.msg;
  // }
};

main();
