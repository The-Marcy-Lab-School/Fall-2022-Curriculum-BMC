import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    async function main() {
      try {
        const res = await fetch("/api/hello"); // localhost:5173 > localhost:3000
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    main();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={(
          <>
            <h1>Hello World!!!! Its ben</h1>
            <p>Message from server: {data.msg}</p>
          </>
        )} />
        <Route path='/users' element={<h1>Users</h1>} />
      
      </Routes>
    </>
  )
}

export default App
