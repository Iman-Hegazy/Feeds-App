import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useStyles } from "../styles/styles";
import { LOADING_VIEW_STYLE_KEY } from "../util/constants";

const LoadingView = () => {
  const loadingStyle = useStyles().get(LOADING_VIEW_STYLE_KEY);
  return (
    <View style={loadingStyle.loading}>
      <ActivityIndicator color="black" size="large" />
    </View>
  );
};
export default LoadingView;
