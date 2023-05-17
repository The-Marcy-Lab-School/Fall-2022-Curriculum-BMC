import InstagramPost from './InstagramPost'

const pictures = [
  { src: "./cat.jpeg", caption: "meow!" },
  { src: "./dog.jpeg", caption: "arf!" },
  { src: "./duck.jpeg", caption: "quack!" },
];

const PicturesList = ({incrementTotalLikes}) => {  
  // Create an <InstagramPost /> for each element
  return <div>{
    pictures.map((picture, idx) => <InstagramPost 
        key={idx} 
        src={picture.src} 
        caption={picture.caption} 
        incrementTotalLikes={incrementTotalLikes}
      />
    )
  }</div>;
};

export default PicturesList;
