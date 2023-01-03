import { useContext } from "react";
import { AppContext } from "../App";

const Home = () => {
  const { username } = useContext(AppContext);
  return <div>This is the home page and user is: {username}</div>;
};

export default Home;
