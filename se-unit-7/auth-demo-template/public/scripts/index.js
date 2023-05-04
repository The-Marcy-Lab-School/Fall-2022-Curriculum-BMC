/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  handleFetch,
  setNav,
} from './global.js';

const main = async () => {
  const user = await fetchLoggedInUser();
  setNav(!!user);

  const [secret, _err] = await handleFetch('/api/logged-in-secret');
  console.log('secret, _err:', secret, _err);
  if (secret) {
    document.querySelector('#secret-message').textContent = secret.msg;
  }
};

main();
