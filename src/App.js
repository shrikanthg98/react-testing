import './App.css';
import Home from './components/Home';
import About from './components/About'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='mother'>
      <div className='header-parent'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </div>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
