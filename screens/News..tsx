import React from "react";
import { useState, useCallback, useEffect } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { NEWS_URL } from "../util/constants";
import { NewModel } from "../model/NewModel";
import { RootStackParamList } from "../model/NavigationModel";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import NewsItem from "./NewsItem";
import ListSearchHeader from "../component/ListSearchHeader";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import ErrorView from "../component/ErrorView";
import LoadingView from "../component/LoadingView";
import { NEWS_SCREEN_STYLE_KEY } from "../util/constants";
import { useStyles } from "../styles/styles";

type NewsScreenProps = NativeStackScreenProps<RootStackParamList, "News">;
let timerId: Int32;

const News: React.FC<NewsScreenProps> = ({
  navigation,
}): React.ReactElement => {
  const listStyle = useStyles().get(NEWS_SCREEN_STYLE_KEY);

  const [data, setData] = useState<NewModel[]>([]);
  const [filteredData, setFilteredData] = useState<NewModel[]>([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setData([]);
    setRefreshing(true);
    setLoading(false);
    getNewsList();
    startTimer();
  }, []);

  let content: any = null;

  const startTimer = () => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      setLoading(false);
      setRefreshing(false);
    }, 3000);
  };

  const stopTimer = () => clearTimeout(timerId);

  const getNewsList = useCallback(async () => {
    try {
      if (refreshing !== true) {
        setLoading(true);
      }
      const response = await fetch(NEWS_URL.toString());
      const data = await response.json();
      let NewsArticlesList: NewModel[] = data.articles;
      setData(NewsArticlesList);
      setFilteredData(NewsArticlesList);
    } catch (e) {
      setLoading(false);
      setRefreshing(false);
      setError(true);
    }
  }, []);

  useEffect(() => {
    startTimer();
    getNewsList();
    return stopTimer;
  }, [getNewsList]);

  function onNewsItemClicked(item: NewModel) {
    navigation.navigate("NewsDetails", { ...item });
  }

  const searchQueryChangeHandler = (query: string) => {
    const filteredList = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredList);
  };

  function onRetryHandler() {
    console.log("onRetryHandler");
    getNewsList();
  }

  const renderItem = ({ item }: { item: NewModel }) => (
    <NewsItem item={item} onPress={onNewsItemClicked.bind(this, item)} />
  );

  if (loading && !refreshing) {
    content = <LoadingView />;
  } else if (error) {
    content = <ErrorView retryHandler={() => onRetryHandler()} />;
  } else if (data) {
    content = (
      <View style={listStyle.content}>
        <ListSearchHeader onListSearch={searchQueryChangeHandler} />
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.url}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#D50000"]}
              tintColor={"#D50000"}
            />
          }
        />
      </View>
    );
  }
  return <>{content}</>;
};
export default News;
