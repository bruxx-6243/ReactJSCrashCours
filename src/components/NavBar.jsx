import { Link } from "react-router-dom";

const NavBar = () => {
  return <div style={{marginBottom: '2rem'}}>
    <Link to="/">Home</Link>
    <Link to="/menu">Menu</Link>
    <Link to="/contact">Contact</Link>
  </div>;
};

export default NavBar;
