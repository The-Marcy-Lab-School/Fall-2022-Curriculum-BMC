import InstagramPost from './InstagramPost'

const PicturesList = () => {
  return (
    <div>
      <InstagramPost src={'./cat.jpeg'} caption={'meow'} />
      <InstagramPost src={'./dog.jpeg'} caption={'arf'} />
      <InstagramPost src={'./duck.jpeg'} caption={'quack'} />
    </div>
  )
};

export default PicturesList;
