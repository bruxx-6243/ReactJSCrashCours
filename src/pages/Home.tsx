import { useSelector } from "react-redux";

const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);

  return <div>This is the home page of {username}</div>;
};

export default Home;
