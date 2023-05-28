import { AppNavigationContainer } from "./navigation/AppNavigationContainer";
import { AppThemeProvider } from "./store/ThemeContext";
import { LanguageDirectionProvider } from "./store/LanguageContext";

export default function App() {
  
  return (
      <LanguageDirectionProvider>
        <AppThemeProvider>
          <AppNavigationContainer />
        </AppThemeProvider>
      </LanguageDirectionProvider>
  );
}
