import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  return (
    <div>
      Contact <br />
      <button onClick={() => setTimeout(()=> {navigate("/")}, 500)}>Back to the home page</button>
    </div>
  );
};

export default Contact;
