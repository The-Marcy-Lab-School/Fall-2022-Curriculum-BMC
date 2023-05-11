import { useState } from 'react';

const LikesButton = ({incrementLikes}) => {

  const [likes, setLikes] = useState(0);

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