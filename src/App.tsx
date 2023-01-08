import { Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <nav style={{marginBottom: "2rem"}}>
          <Link to="/">Home</Link>
          <Link to="/login" style={{margin: "0 20px"}}>Login</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
