import { useParams } from "react-router-dom";

const Menu = () => {
  let { recipe } = useParams();

  return <div> This is the recipe of {recipe} </div>;
};

export default Menu;
