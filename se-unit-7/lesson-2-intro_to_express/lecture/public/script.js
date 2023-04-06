const main = async () => {
  // because this page is hosted on our server, we don't need to specify the full URL
  const url = '/fellows';
  const fellowsUl = document.querySelector('#fellows');
  const fellowsForm = document.querySelector('#fellowForm');

  const postFellow = async (fellowName) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fellowName,
      }),
    };
    const r = await fetch(url, options);
    const fellow = await r.json();
    console.log('fellow added: ', fellow);
  };

  const getFellows = async () => {
    const fellows = await fetch(url).then((r) => r.json()).catch((e) => alert.error(e));
    fellowsUl.innerHTML = '';
    fellows.forEach(({ name }) => {
      fellowsUl.insertAdjacentHTML('afterBegin', `<li>${name}</li>`);
    });
  }

  fellowsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await postFellow(e.target[0].value);
    await getFellows();
    e.target.reset();
  });

  getFellows();
};

main();
