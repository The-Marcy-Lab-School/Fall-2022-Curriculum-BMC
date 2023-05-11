import InstagramPost from './InstagramPost'

const PicturesList = ({incrementLikes}) => {

  // imagine if this came from an API!
  const pictures = [
    { src: "./cat.jpeg", caption: "meow!" },
    { src: "./dog.jpeg", caption: "arf!" },
    { src: "./duck.jpeg", caption: "quack!" },
  ];
  
  // Create an <InstagramPost /> for each element
  const InstagramPosts = pictures.map((picture, idx) => {
    return (
      <InstagramPost 
        key={idx} 
        src={picture.src} 
        caption={picture.caption} 
        incrementLikes={incrementLikes}
      />
    );
  });

  return <div>{InstagramPosts}</div>;
};

export default PicturesList;
