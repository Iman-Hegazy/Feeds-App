import React from "react";
import { Button, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import { SETTINGS_SCREEN_STYLE_KEY } from "../util/constants";
import { useStyles } from "../styles/styles";
import { useTranslation } from "react-i18next";
import "../locales/index";
import { languageContext } from "../store/LanguageContext";

const SettingsScreen = () => {
  const { toggle, theme } = useContext(ThemeContext);

  const { t, i18n } = useTranslation();
  const styles = useStyles().get(SETTINGS_SCREEN_STYLE_KEY);

  const { direction, toggleDirection } = useContext(languageContext);
  console.log("direction", direction);

  return (
    <View style={styles.container}>
      <View style={styles.buttonTitleStyle}>
        <Button
          title={t("appStringsKeys.changeLngBtn")}
          color={theme.buttonColor}
          onPress={() => {
            i18n
              .changeLanguage(i18n.language === "ar" ? "en" : "ar")
              .then(() => {
                toggleDirection();
              })
              .catch((err) => {
                console.log("something went wrong while applying RTL");
              });
          }}
        />
      </View>
      <View style={styles.buttonTitleStyle}>
        <Button
          onPress={toggle}
          title={t("appStringsKeys.changeAppTheme")}
          color={theme.buttonColor}
        ></Button>
      </View>
    </View>
  );
};
export default SettingsScreen;
