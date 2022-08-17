import { createThemeContext } from "./createContext";
import { useState } from "react";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {

    if (theme === "Light") {
      setTheme("Dark");
      window.document.body.classList.remove("bodyLight");
      window.document.body.classList.add("bodyDark");
    } else {
      setTheme("Light");
      window.document.body.classList.remove("bodyDark");
      window.document.body.classList.add("bodyLight");
    }
    
  };

  return (
    <createThemeContext.Provider value={{ toggleTheme }}>
      {" "}
      {children}{" "}
    </createThemeContext.Provider>
  );
};
