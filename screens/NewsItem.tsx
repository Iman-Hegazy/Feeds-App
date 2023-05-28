import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { NEWS_LIST_ITEM_STYLE_KEY } from "../util/constants";
import { NewModel } from "../model/NewModel";
import { useStyles } from "../styles/styles";

type NewsItem = {
  item: NewModel;
  onPress: () => void;
};

const NewsItem: React.FC<NewsItem> = ({ item, onPress }) => {
  const imgUrl = item.urlToImage;
  const styles = useStyles().get(NEWS_LIST_ITEM_STYLE_KEY);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.listItem}>
        <Image
          source={{ uri: imgUrl }}
          defaultSource={require("../assets/favicon.png")}
          style={styles.listItemImage}
        />
        <View style={styles.textContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.listItemTitle}
          >
            {item.title}
          </Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.listItemDescription}
          >
            {item.description}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default NewsItem;
