const ChangeProfile = () => {
  const [newUserName, setNewUserName] = useState("");
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
