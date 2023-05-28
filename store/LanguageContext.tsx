import { createContext } from "react";
import { useState, useEffect } from "react";
import { I18nManager } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LanguageContextState = {
  direction: string;
  toggleDirection: () => void;
};

type AppLanguageProviderProps = {
  children: React.ReactNode;
};

const initialState: LanguageContextState = {
  direction: "ltr",
  toggleDirection: () => {},
};

const languageContext = createContext<LanguageContextState>(initialState);

const LanguageDirectionProvider = ({ children }: AppLanguageProviderProps) => {
  const [direction, setDirection] = useState("ltr");

  const toggleDirection = async () => {
    const dir = direction === "ltr" ? "rtl" : "ltr";
    setDirection(dir);
    await AsyncStorage.setItem("direction", dir);
    console.log("seeeeetttttasync storage dir", dir);
  };

  useEffect(() => {
    const getDir = async () => {
      const defaultDirection = await AsyncStorage.getItem("direction");
      I18nManager.forceRTL(defaultDirection === "rtl");
      console.log("getttttttasync storage dir", defaultDirection);
      const d = defaultDirection === "rtl" ? "rtl" : "ltr";
      setDirection(d);
    };
    getDir();
  }, [direction]);

  return (
    <languageContext.Provider
      value={{
        direction,
        toggleDirection,
      }}
    >
      {children}
    </languageContext.Provider>
  );
};

export { languageContext, LanguageDirectionProvider };
