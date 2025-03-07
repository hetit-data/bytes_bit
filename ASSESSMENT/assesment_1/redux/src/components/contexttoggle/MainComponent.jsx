import React from "react";
import { useTheme } from "./ThemeContext";

const MainComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default MainComponent;
