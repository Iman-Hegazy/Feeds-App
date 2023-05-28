export type Theme = {
  theme: string;
  color: string;
  screenBackground: string;
  cardBackground:string;
  buttonColor:string;
};

type AppThemeMode = {
  light: Theme;
  dark: Theme;
};

export const appThemeMode: AppThemeMode = {
  light: {
    theme: "light",
    color: "black",
    screenBackground: "white",
    cardBackground:'white',
    buttonColor:'coral'
  },
  dark: {
    theme: "dark",
    color: "white",
    screenBackground: "black",
    cardBackground:'coral',
    buttonColor:'coral'
  },
};

