import './App.css';
import Header from './components/Header';
import PicturesList from './components/PicturesList';
import { useState } from 'react';
import Context from './context/Context';

const App = () => {

  const [totalLikes, setTotalLikes] = useState(0);
  const incrementLikes = () => setTotalLikes(totalLikes+1);

  return (
    <>
      <Header likes={totalLikes}/>
      <Context.Provider value={incrementLikes}>
        <PicturesList />
      </Context.Provider>
    </>
  );
};

export default App;