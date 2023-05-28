import React, { createContext } from "react";
import { Theme, appThemeMode } from "./AppThemeMode";

type ThemeContextState = {
  dark: boolean;
  theme: Theme;
  toggle: () => void;
};

type AppThemeProviderProps = {
  children: React.ReactNode;
};

const initialState: ThemeContextState = {
  dark: false,
  theme: appThemeMode.light,
  toggle: () => {},
};

const ThemeContext = createContext<ThemeContextState>(initialState);

function AppThemeProvider({ children }: AppThemeProviderProps) {
  // Default theme is light
  const [dark, setDark] = React.useState(false);

  const toggle = () => {
    setDark(!dark);
  };

  const theme: Theme = dark ? appThemeMode.dark : appThemeMode.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { AppThemeProvider, ThemeContext };
