import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const ChangeProfile = (props) => {
  const [newUserName, setNewUserName] = useState("");
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <input onChange={(event) => setNewUserName(event.target.value)} />
      <button
        onClick={() => {
          setUserName(newUserName);
        }}
      >
        Change Username
      </button>
    </div>
  );
};

export default ChangeProfile;
