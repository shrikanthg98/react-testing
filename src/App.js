import Home from './components/Home';
import About from './components/About'
import { Routes, Route, Link } from "react-router-dom";
import "antd/dist/antd.min.css";
import { ThemeContext } from './MyContext';
import { useState } from 'react';
import Toggle from './components/Toggle';
import './App.css';
import SignUp from './components/SignUp';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='mother'>
        <div className='main' id={theme}>
          <div className='header-parent'>
            <h3><Link style={{ textDecoration: 'none' }} to="/">Home</Link></h3>
            <h3><Link style={{ textDecoration: 'none' }} to="/about">About</Link></h3>
            <h3><Link style={{ textDecoration: 'none' }} to="/signup">Sign Up</Link></h3>
            <Toggle />
          </div>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
