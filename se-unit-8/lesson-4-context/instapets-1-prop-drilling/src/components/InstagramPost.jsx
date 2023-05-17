import LikesButton from './LikesButton';

const InstagramPost = ({src, caption, incrementTotalLikes}) => {
  return (
    <div className="insta-pic">
      <img alt="cat pic" src={src} />
      <p>{caption}</p>
      <LikesButton incrementTotalLikes={incrementTotalLikes}/>
    </div>
  );
};

export default InstagramPost;