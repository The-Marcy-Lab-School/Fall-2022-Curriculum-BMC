import { useState } from 'react'
import './App.css'
import ProjectList from './ProjectList'
import LikesContext from './LikesContext.jsx';

function App() {
  const [totalLikes, setTotalLikes] = useState(0);

  return (
    <>
      <LikesContext.Provider value={{ totalLikes, setTotalLikes }}>
        <h1>My Projects</h1>
        <p>My projects have been liked {totalLikes} times</p>
        <ProjectList projectNames={["A", "B", "C"]}/>
      </LikesContext.Provider>
    </>
  )
}

export default App
