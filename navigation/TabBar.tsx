import React from "react";
import i18n from "i18next";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarParamList } from "../model/NavigationModel";
import SettingsScreen from "../screens/SettingsScreen";
import { AppNavigationStack } from "./AppNavigationStack";
import { useTranslation } from "react-i18next";
import "../locales/index";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../store/ThemeContext";
import { languageContext } from "../store/LanguageContext";
import { useContext } from "react";

const Tab = createBottomTabNavigator<TabBarParamList>();

export default function TabBar() {
  const { theme } = useContext(ThemeContext);
  const { direction } = useContext(languageContext);

  const { t } = useTranslation();
  const feedsScreenTitle = t("appStringsKeys.feeds");
  const settingsScreenTitle = t("appStringsKeys.settings");

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.screenBackground,
          direction: direction === "rtl" ? "rtl" : "ltr",
        },
        headerStyle: {
          backgroundColor: theme.screenBackground,
        },
      }}
    >
      <Tab.Screen
        name="Feeds"
        component={AppNavigationStack}
        options={{
          title: feedsScreenTitle,
          headerTintColor: theme.color,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: settingsScreenTitle,
          headerTintColor: theme.color,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
