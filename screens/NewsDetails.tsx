import React from "react";
import { RootStackParamList } from "../model/NavigationModel";
import {
  NEWS_ITEM_DETAILS_STYLE_KEY,
} from "../util/constants";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View, Image, Pressable } from "react-native";
import { useStyles } from "../styles/styles";
import { openInNewTab } from "../util/ExternalUrlNavigation";
import { useTranslation } from "react-i18next";

type NewsDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "NewsDetails"
>;

const NewsDetails: React.FC<NewsDetailsScreenProps> = ({ route }) => {
  const imgUrl = route?.params?.urlToImage;
  const authorName = route?.params?.author ? route?.params?.author : "UnKnown";
  const newsDetailsStyle = useStyles().get(NEWS_ITEM_DETAILS_STYLE_KEY);
  const {t} = useTranslation();

  function onNewsDetailsClick() {
    openInNewTab(route?.params.url);
  }

  return (
    <Pressable onPress={onNewsDetailsClick}>
      <View style={newsDetailsStyle.itemCardContainer}>
        <Image
          style={newsDetailsStyle.image}
          defaultSource={require("../assets/favicon.png")}
          source={{ uri: imgUrl }}
        />

        <View style={newsDetailsStyle.textContainer}>
          <Text ellipsizeMode="tail" style={newsDetailsStyle.title}>
            {route?.params?.title}
          </Text>

          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={newsDetailsStyle.description}
          >
            {t("appStringsKeys.description")}: {route?.params?.description}
          </Text>
          <Text style={newsDetailsStyle.description}>{t("appStringsKeys.author")}: {authorName}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default NewsDetails;
