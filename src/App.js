import './App.css';
import Home from './components/Home';
import About from './components/About'
import { Routes, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";

function App() {
  return (
    <div className='mother'>
      <div className='header-parent'>
        <h3><Link to="/">Home</Link></h3>
        <h3><Link to="/About">About</Link></h3>
      </div>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
