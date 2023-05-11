import LikesButton from "./LikesButton";

const InstagramPost = ({src, caption}) => {
  
  // const [name, setName] = useState('')
  console.log('re-rendering the post ' + src);

  return (
    <div className="insta-pic">
      <img alt="cat pic" src={src} />
      <p>{caption}</p>
      <LikesButton />
    </div>
  );
};

export default InstagramPost;