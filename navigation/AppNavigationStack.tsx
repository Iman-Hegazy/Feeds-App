import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../model/NavigationModel";
import News from "../screens/News.";
import NewsDetails from "../screens/NewsDetails";
import { useTranslation } from "react-i18next";
import { languageContext } from "../store/LanguageContext";
import { useContext } from "react";
import "../locales/index";

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigationStack = () => {
  const { t } = useTranslation();
  const { direction } = useContext(languageContext);

  const newsScreenTitle = t("appStringsKeys.news");
  const newsDetailsScreenTitle = t("appStringsKeys.newsDetails");
  const backTitle = t("appStringsKeys.back");
  const isRTLDirection = direction === "rtl";
  console.log("navigation direction", direction);
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { direction: direction === "rtl" ? "rtl" : "ltr" },
        headerBackTitleStyle: {
          direction: direction === "rtl" ? "rtl" : "ltr" ,
        },

        headerBackTitle: backTitle,
      }}
    >
      <Stack.Screen
        name="News"
        component={News}
        options={{ headerShown: false, title: newsScreenTitle }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ title: newsDetailsScreenTitle }}
      />
    </Stack.Navigator>
  );
};
