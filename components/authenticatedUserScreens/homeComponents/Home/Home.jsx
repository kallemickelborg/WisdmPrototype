import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import { getNewsData } from "../../../../services/contentServices/newsService";

import NewsArticles from "../../../NewsArticles/NewsArticles";

import { styles as globalStyles } from '../../../../globalStyles'

export default function Home() {
  const [data, setData] = useState([]);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded.current) {
      getData();
      isLoaded.current = true;
    }
    return () => isLoaded.current = false;
  }, []);

  useEffect(() => {
    // console.log(data);
  }, [data])

  const getData = async () => {
    const newsData = await getNewsData();
    setData(newsData);
  }

  return (
    <View style={globalStyles.screenContainer}>
      {
        data.length ?
        <FlatList
          // keyExtractor={(item) => item.source.replace(' ', '').concat(item.title.replace(' ', ''))}
          data={data}
          renderItem={({ item }) => (
            <NewsArticles
              title={item.title}
              source={item.source}
              summary={item.summary}
              url={item.url}
              banner_image={item.banner_image}
              timestamp={item.timestamp}
              overall_sentiment_score={item.overall_sentiment_score}
              overall_sentiment_label={item.overall_sentiment_label}
              ticker={item.ticker}
            />
          )}
        /> :
        <ActivityIndicator size="large"/>
      }
    </View>
  );
}