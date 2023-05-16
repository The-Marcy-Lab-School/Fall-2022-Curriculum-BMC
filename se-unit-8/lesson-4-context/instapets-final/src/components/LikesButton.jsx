import { useState, useContext } from 'react';
import Context from '../context/Context';

const LikesButton = () => {

  const [likes, setLikes] = useState(0);
  const incrementLikes = useContext(Context);

  const handleClick = () => {
    incrementLikes();
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