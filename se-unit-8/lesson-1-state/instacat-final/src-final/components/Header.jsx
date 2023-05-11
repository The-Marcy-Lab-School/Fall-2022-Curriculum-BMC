const Header = ({likes}) => {
  return (
    <header>
      <h1>My Pet Pics</h1>
      <p>My pictures have been liked {likes} times!</p>
    </header>
  );
};

export default Header;