
export type RootStackParamList = {
  News: undefined;
  NewsDetails: {
    id: string;
    title: string;
    author: string;
    urlToImage: string;
    description: string;
    source: {
      id: string;
      name: string;
    };
    url: string;
    onPress: () => void;
  };
};

export type TabBarParamList = {
  Feeds: undefined;
  Settings: undefined;
};
