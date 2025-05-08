import React, { useContext } from "react";
import { ThemeContext, themes } from "../context/themeContext";


const ToggleSwitch = ({ onToggle }) => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <label className="switch" htmlFor="colorchange">
        <input id="colorchange" type="checkbox" onChange={toggleTheme} title="Toggle theme" />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default ToggleSwitch;