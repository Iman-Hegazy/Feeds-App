import React from "react";
import { View, TextInput } from "react-native";
import { useStyles } from "../styles/styles";
import { SEARCH_VIEW_STYLE_KEY } from "../util/constants";
import { useTranslation } from "react-i18next";

interface Props {
  onListSearch: (query: string) => void;
}

const ListSearchHeader: React.FC<Props> = ({
  onListSearch,
}): React.ReactElement => {
  const { t } = useTranslation();
  const styles = useStyles().get(SEARCH_VIEW_STYLE_KEY);
  const searchPlaceHolder: string = t("appStringsKeys.search");

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        onChangeText={(queryText) => onListSearch(queryText)}
        placeholder={searchPlaceHolder}
        style={styles.textInput}
      />
    </View>
  );
};

export default ListSearchHeader;
