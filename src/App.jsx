import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import "./App.css";

export const AppContext = createContext();

const App = () => {
  const [username, setUserName] = useState("");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUserName }}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>404 Page not found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
