import React from "react";
import { ThemeContext, themes } from "../context/themeContext";
import { useContext } from "react";


const Button = ({ label, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={theme === themes.light ? "button" : "button-dark"}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Button;
