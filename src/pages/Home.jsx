import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], () =>
    axios.get("https://catfact.ninja/fact").then((res) => res.data)
  );

  if (isError) {
    return <h1>Sorry there's an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {catData?.fact} <br />
      <button onClick={refetch}>Refetch Data</button>
    </div>
  );
};

export default Home;
