import { useState, useContext } from 'react';
import LikesContext from './LikesContext';

const Project = ({ name }) => {

  const { totalLikes, setTotalLikes } = useContext(LikesContext);

  const [hasBeenLiked, setHasBeenLiked] = useState(false);

  const handleClick = () => {
    const newLikes = totalLikes + (hasBeenLiked ? -1 : 1)
    setTotalLikes(newLikes);
    setHasBeenLiked(!hasBeenLiked)
  }

  return (
    <div>
      <h3>Project {name} {hasBeenLiked ? '*' : ''}</h3>
      <button onClick={handleClick}>{hasBeenLiked ? 'X' : '<3'}</button>
    </div>
  );
}

export default Project;