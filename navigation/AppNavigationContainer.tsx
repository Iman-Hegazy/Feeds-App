import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./TabBar";
import * as Linking from "expo-linking";

export function AppNavigationContainer() {
  const prefix = Linking.createURL("/");
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Feeds: {
          path: "Feeds",
          screens: {
            NewsDetails: {
              path: "NewsDetails",
            },
          },
        },
        Settings: "Settings",
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <TabBar />
    </NavigationContainer>
  );
}

