export type NewModel = {
  id: string;
  title: string;
  author: string;
  urlToImage: string;
  description: string;
  source: {
    id: string;
    name: string;
  };
  url:string,
  onPress: () => void;
};

// export type NewsListModel = {
//   newsList: NewModel[];
// };
