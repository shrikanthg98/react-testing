import React, {useContext} from "react";
import { UserContext } from "../UserContext";

const Home = () => {
  const msg = useContext(UserContext);
  return(<>
  <h1>Home {msg}</h1>
  </>);
}

export default Home;