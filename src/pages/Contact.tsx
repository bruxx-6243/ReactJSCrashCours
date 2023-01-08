import { useSelector } from "react-redux";

const Contact = () => {
  const username = useSelector((state: any) => state.user.value.username);

  return <div>This is the contact page of {username}</div>;
};

export default Contact;
