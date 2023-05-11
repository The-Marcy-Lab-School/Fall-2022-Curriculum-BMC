const InstagramPost = ({src, caption}) => {
  return (
    <div className="insta-pic">
      <img alt="cat pic" src={src} />
      <p>{caption}</p>
    </div>
  );
};

export default InstagramPost;