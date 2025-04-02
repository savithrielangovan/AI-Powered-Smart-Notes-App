import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const lightTheme = {
  background: "#FFFFFF",
  text: "#000000",
  primary: "#007AFF",
  secondary: "#34C759",
  font: "Inter-Regular",
};

const darkTheme = {
  background: "#1E1E1E",
  text: "#FFFFFF",
  primary: "#0A84FF",
  secondary: "#30D158",
  font: "Inter-Regular",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
