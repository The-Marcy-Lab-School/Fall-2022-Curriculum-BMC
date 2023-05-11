import LikesButton from './LikesButton';

const InstagramPost = ({src, caption, incrementLikes}) => {
  return (
    <div className="insta-pic">
      <img alt="cat pic" src={src} />
      <p>{caption}</p>
      <LikesButton incrementLikes={incrementLikes}/>
    </div>
  );
};

export default InstagramPost;