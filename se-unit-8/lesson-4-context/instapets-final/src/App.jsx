import './App.css';
import Header from './components/Header';
import PicturesList from './components/PicturesList';
import { useState } from 'react';
import InstagramContext from './context/InstagramContext';

const App = () => {

  const [totalLikes, setTotalLikes] = useState(0);
  const incrementLikes = () => setTotalLikes(totalLikes+1);

  return (
    <>
      <Header likes={totalLikes}/>
      <InstagramContext.Provider value={incrementLikes}>
        <PicturesList />
      </InstagramContext.Provider>
    </>
  );
};

export default App;