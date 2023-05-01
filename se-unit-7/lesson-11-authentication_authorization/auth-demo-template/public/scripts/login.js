/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  signupAndLoginHandler,
  setNav,
} from './global.js';

const main = async () => {
  const user = await fetchLoggedInUser(); // GET /api/me
  if (user) return window.location.assign('/user.html');

  setNav(false); // show logged-out nav
  document.querySelector('#create-form')
    .addEventListener('submit', async (event) => {
      event.preventDefault();
      signupAndLoginHandler('/api/users/login', event.target);
    });
};

main();
