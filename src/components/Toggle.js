import React, { useContext } from "react";
import { ThemeContext } from "../MyContext";
import { SmileOutlined, SmileFilled } from "@ant-design/icons";
import '../App.css'

const Toggle = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return(<div>{
    theme === "dark" ? <SmileOutlined className="smiley" onClick={toggleTheme}/> : <SmileFilled className="smiley" onClick={toggleTheme}/>
    }
  </div>);
}

export default Toggle;