import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [prayer, setPrayer] = useState(''); 

  return (
    <ThemeContext.Provider value={{ prayer, setPrayer }}>
      { children }
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}