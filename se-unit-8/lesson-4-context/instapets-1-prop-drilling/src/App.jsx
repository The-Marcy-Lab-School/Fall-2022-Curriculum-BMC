import Header from './components/Header';
import PicturesList from './components/PicturesList';
import {useState} from 'react';
import './App.css';

const App = () => {

  const [totalLikes, setTotalLikes] = useState(0);
  const incrementTotalLikes = () => setTotalLikes(totalLikes+1);

  return (
    <>
      <Header likes={totalLikes}/>
      <PicturesList incrementTotalLikes={incrementTotalLikes} />
    </>
  );
};

export default App;