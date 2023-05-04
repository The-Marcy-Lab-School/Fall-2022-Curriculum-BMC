/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  logOutHandler,
  updateUsernameHandler,
  setNav,
} from './global.js';

const isAuthError = (err) => (err.status === 401 || err.status === 403);
const redirectToLogin = () => window.location.assign('/login.html');
const renderUsername = (username) => {
  document.querySelector('#username').textContent = username;
};

const main = async () => {
  const user = await fetchLoggedInUser();
  if (!user) return redirectToLogin();

  const logoutForm = document.querySelector('#logout-form');
  const updateUsernameForm = document.querySelector('#username-form');

  logoutForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    logOutHandler();
  });

  updateUsernameForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const [response, err] = await updateUsernameHandler(event.target);

    if (err) return isAuthError(err) ? redirectToLogin() : alert('Something went wrong');
    renderUsername(response.username);

    event.target.reset();
  });

  updateUsernameForm.dataset.userId = user.id;

  setNav(!!user);
  renderUsername(user.username);
};

main();
