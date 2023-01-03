import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [predicted, setPredicted] = useState(null);

  const handleAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      setPredicted(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>Name: {predicted?.name}</h1>
      <h1>Predicted age: {predicted?.age}</h1>
      <h1>Predicted count: {predicted?.count}</h1>
      <input
        type="text"
        placeholder="Enter the name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={handleAge}>Get The Age</button>
    </div>
  );
}

export default App;
