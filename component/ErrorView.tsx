import React from "react";
import { Button, Text, View } from "react-native";
import APPLICATION_CONSTANTS from "../util/constantString";
import { useStyles } from "../styles/styles";
import { ERROR_SCREEN_STYLE_KEY } from "../util/constants";

type props = {
  retryHandler: () => void;
};

const ErrorView = ({ retryHandler }: props): JSX.Element => {
  const errorViewsStyle = useStyles().get(ERROR_SCREEN_STYLE_KEY);

  return (
    <View style={errorViewsStyle.errorContainer}>
      <Text style={errorViewsStyle.boldText}>
        {APPLICATION_CONSTANTS.OOPS_MESSAGE_KEY}
      </Text>
      <Text style={errorViewsStyle.text}>
        {APPLICATION_CONSTANTS.ERROR_MESSAGE_KEY}
      </Text>
      <Button
        onPress={() => retryHandler()}
        title={APPLICATION_CONSTANTS.ERROR_BUTTON_TITLE_KEY}
      ></Button>
    </View>
  );
};
export default ErrorView;
