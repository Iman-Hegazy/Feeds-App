import React from "react";
import { View, TextInput } from "react-native";
import { useStyles } from "../styles/styles";
import { SEARCH_VIEW_STYLE_KEY } from "../util/constants";
interface Props {
  onListSearch: (query: string) => void;
}

const ListSearchHeader: React.FC<Props> = ({
  onListSearch,
}): React.ReactElement => {
  const styles = useStyles().get(SEARCH_VIEW_STYLE_KEY);
  
  return (
    <View
      style={styles.container}
    >
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        onChangeText={(queryText) => onListSearch(queryText)}
        placeholder="Search"
        style={styles.textInput}
      />
    </View>
  );
};

export default ListSearchHeader;
