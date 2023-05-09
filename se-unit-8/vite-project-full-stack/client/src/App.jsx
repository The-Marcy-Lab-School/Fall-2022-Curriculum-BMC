import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState()
  const url = '/api/hello';

  async function getData() {
    try {
      const r = await fetch(url);
      const data = await r.json()
      setData(data.msg);
    }
    catch (err) {
      console.error(err);
      return null;
    }
  }

  return (
    <>
      <button onClick={getData}>Access server using proxy</button>
      <p>data: {data}</p>
    </>
  )
}

export default App
