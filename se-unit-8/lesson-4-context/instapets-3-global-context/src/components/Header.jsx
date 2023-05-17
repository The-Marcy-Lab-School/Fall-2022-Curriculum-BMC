import { useContext } from "react";
import InstagramContext from "../context/InstagramContext";

const Header = () => {

  const { totalLikes } = useContext(InstagramContext);

  return (
    <header>
      <h1>My Pet Pics</h1>
      <p>My pictures have been liked {totalLikes} times!</p>
    </header>
  );
};

export default Header;