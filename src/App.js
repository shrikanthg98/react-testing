import './App.css';
import Home from './components/Home';
import About from './components/About'
import { Routes, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { ThemeContext } from './MyContext';
import { useState } from 'react';
import Toggle from './components/Toggle';

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
            <h3><Link style={{textDecoration: 'none'}} to="/">Home</Link></h3>
            <h3><Link style={{textDecoration: 'none'}} to="/About">About</Link></h3>
            <Toggle/>
          </div>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/About' element={<About />} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
