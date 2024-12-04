// TODO: Create a ThemeContext to manage light and dark themes across the application.
// TODO: Use localStorage to persist the user's theme preference.
// TODO: Provide the current theme and a toggle function to all children components.

import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check local storage for saved theme or default to "light"
    return localStorage.getItem("theme") || "light";
  });

  // Update the document's class when the theme changes
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme); // Save theme to local storage
  }, [theme]);

  // Toggle between "light" and "dark" theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};