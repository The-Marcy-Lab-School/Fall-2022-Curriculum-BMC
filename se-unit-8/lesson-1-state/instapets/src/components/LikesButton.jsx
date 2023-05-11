import { useState } from 'react';

const LikesButton = () => {

  const [likes, setLikes] = useState(0)

  console.log('rendering likes button');

  return (
    <div>
        <button onClick={() => setLikes(likes+1)}>Like</button>
        <p>{likes}</p>
      </div>
  )
}

export default LikesButton;