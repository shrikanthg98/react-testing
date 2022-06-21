import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import Todos from "./Todos";

const Home = () => {
  const msg = useContext(UserContext);
  return (<>
    <h1>Todos</h1>
    <Todos />
  </>);
}

export default Home;