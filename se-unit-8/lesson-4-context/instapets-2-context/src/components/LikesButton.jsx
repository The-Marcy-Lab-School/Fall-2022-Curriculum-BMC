import { useState, useContext } from 'react';
import InstagramContext from '../context/InstagramContext';

const LikesButton = () => {

  const [likes, setLikes] = useState(0);
  const incrementTotalLikes = useContext(InstagramContext);

  const handleClick = () => {
    incrementTotalLikes();
    setLikes(likes+1)
  }

  return (
    <div className="likes-container">
      <button onClick={handleClick}>Like</button>
      <p>Likes: {likes}</p>
    </div>
  )
}

export default LikesButton;