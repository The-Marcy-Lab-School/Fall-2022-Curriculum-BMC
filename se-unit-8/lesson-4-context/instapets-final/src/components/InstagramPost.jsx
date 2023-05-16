import LikesButton from './LikesButton';

const InstagramPost = ({src, caption}) => {
  return (
    <div className="insta-pic">
      <img alt="cat pic" src={src} />
      <p>{caption}</p>
      <LikesButton/>
    </div>
  );
};

export default InstagramPost;