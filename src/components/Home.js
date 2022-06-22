import React, { useContext } from "react";
import { ThemeContext } from "../MyContext";
import Todos from "./Todos";
import '../App.css';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (<div id={theme}>
    <h1>Todos</h1>
    <Todos />
  </div>);
}

export default Home;