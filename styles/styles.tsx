import { StyleSheet } from "react-native";
import {
  NEWS_LIST_ITEM_STYLE_KEY,
  NEWS_ITEM_DETAILS_STYLE_KEY,
  TEXT_VIEWS_STYLE_KEY,
  ERROR_SCREEN_STYLE_KEY,
  LOADING_VIEW_STYLE_KEY,
  NEWS_SCREEN_STYLE_KEY,
  SEARCH_VIEW_STYLE_KEY,
  SETTINGS_SCREEN_STYLE_KEY,
} from "../util/constants";
import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

export const useStyles = () => {
  const { theme } = useContext(ThemeContext);

  const newsListItemstyles = StyleSheet.create({
    listItemImage: {
      width: "30%",
      height: 60,
      alignSelf: "center",
      marginRight: 10,
      borderRadius: 4,
    },
    listItemTitle: {
      paddingVertical: 10,
      fontWeight: "bold",
      fontSize: 17,
      color: theme.color,
    },
    listItemDescription: {
      paddingVertical: 10,
      fontSize: 17,
      color: theme.color,
    },
    listItem: {
      marginHorizontal: 30,
      marginVertical: 10,
      paddingBottom: 10,
      paddingHorizontal: 10,
      backgroundColor: theme.cardBackground,
      flex: 1,
      alignSelf: "center",
      flexDirection: "row",
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    textContainer: {
      alignItems: "center",
      alignContent: "flex-start",
      flex: 1,
    },
  });

  const newsItemDetailsStyle = StyleSheet.create({
    itemCardContainer: {
      width: "100%",
      height: "100%",
      borderRadius: 15,
      backgroundColor: theme.screenBackground,
      overflow: "hidden",
    },

    image: {
      width: "100%",
      height: "70%",
    },
    title: {
      color: theme.color,
      fontWeight: "bold",
      fontSize: 20,
      padding: 15,
    },
    description: {
      fontSize: 15,
      color: theme.color,
      paddingHorizontal: 15,
      paddingVertical: 5,
    },

    textContainer: {
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      paddingBottom: 10,
    },
  });

  const errorScreenStyle = StyleSheet.create({
    errorContainer: {
      flex: 1,
      backgroundColor: theme.screenBackground,
      paddingVertical: 200,
      paddingHorizontal: 100,
    },
    reloadButton: {
      tintColor: theme.color,
    },
    boldText: {
      color: theme.color,
      fontWeight: "bold",
      fontSize: 20,
      padding: 15,
      margin: 15,
      width: 300,
      textAlign: "center",
      alignSelf: "center",
    },
    text: {
      fontSize: 15,
      color: theme.color,
      paddingHorizontal: 15,
      paddingVertical: 10,
      width: 300,
      textAlign: "center",
      alignSelf: "center",
    },
  });
  const loadingViewStyle = StyleSheet.create({
    loading: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const searchViewStyle = StyleSheet.create({
    container: {
      backgroundColor: theme.cardBackground,
      padding: 10,
      marginHorizontal: 25,
      marginVertical: 10,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    textInput: {
      backgroundColor: theme.cardBackground,
      paddingHorizontal: 20,
      color: theme.color,
    },
  });

  const newsListStyles = StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: theme.screenBackground,
    },
  });

  const settingsScreenStyles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      alignSelf: "flex-start",
      backgroundColor: theme.screenBackground,
    },
    buttonTitleStyle: {
      margin: 20,
    },
  });

  let styles = new Map();
  styles.set(NEWS_ITEM_DETAILS_STYLE_KEY, newsItemDetailsStyle);
  styles.set(NEWS_LIST_ITEM_STYLE_KEY, newsListItemstyles);
  styles.set(ERROR_SCREEN_STYLE_KEY, errorScreenStyle);
  styles.set(LOADING_VIEW_STYLE_KEY, loadingViewStyle);
  styles.set(NEWS_SCREEN_STYLE_KEY, newsListStyles);
  styles.set(SEARCH_VIEW_STYLE_KEY, searchViewStyle);
  styles.set(SETTINGS_SCREEN_STYLE_KEY, settingsScreenStyles);

  return styles;
};
