// const root = document.querySelector('#root');
// const h1 = document.createElement('h1');
// h1.innerText = 'Hello World';

// const makeHeader = () => {
//   const h1 = document.createElement('h1');
//   h1.innerText = 'Hello World';
//   return h1;
// }

// const header1 = makeHeader();
// const header2 = makeHeader();
// const header3 = makeHeader();
// root.append(header1, header2, header3);

import ReactDOM from 'react-dom/client'

const Header = () => {
  return (
    <h1>Hello World</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Header />
    <Header />
  </>
)