import { useState } from 'react';
import InstagramContext from './InstagramContext';

const InstagramContextProvider = ({ children }) => {
  const [totalLikes, setTotalLikes] = useState(0);
  const incrementTotalLikes = () => setTotalLikes(totalLikes+1);

  const contextValues = {
    totalLikes, incrementTotalLikes
  }

  return (
    <InstagramContext.Provider value={contextValues}>
      {children}
    </InstagramContext.Provider>
  )
}

export default InstagramContextProvider;