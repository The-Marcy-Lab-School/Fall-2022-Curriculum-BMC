import './App.css';
import Header from './components/Header';
import PicturesList from './components/PicturesList';
import { useState } from 'react';
import InstagramContext from './context/InstagramContext';

const App = () => {

  const [totalLikes, setTotalLikes] = useState(0);
  const incrementTotalLikes = () => setTotalLikes(totalLikes+1);

  return (
    <>
      <Header likes={totalLikes}/>
      <InstagramContext.Provider value={incrementTotalLikes}>
        <PicturesList />
      </InstagramContext.Provider>
    </>
  );
};

export default App;