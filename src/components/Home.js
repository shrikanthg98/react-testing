import React, { useContext } from "react";
import { ThemeContext } from "../MyContext";
import Todos from "./Todos";
import '../App.css';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (<div>
    <h1>Heading</h1>
    <Todos />
  </div>);
}

export default Home;