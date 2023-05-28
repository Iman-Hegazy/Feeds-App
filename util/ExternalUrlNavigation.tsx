import { Linking } from "react-native";

export const openInNewTab = (url: string): void => {
  Linking.openURL(url).catch((err) => console.error("An error occurred", err));
};

// export const onClickUrl =
//   (url: string): (() => void) =>
//   () =>
//     openInNewTab(url);
