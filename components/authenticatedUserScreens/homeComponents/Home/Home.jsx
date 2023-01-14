import * as React from "react";
import { useRef, useMemo, useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView, Button } from "react-native";

import { getNewsData } from "../../../../services/contentServices/newsService";

import NewsArticles from "../../../NewsArticles/NewsArticles";
import { log } from "react-native-reanimated";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const isLoaded = useRef(false);

  //THIS WORKS
  useEffect(() => {
    if (!isLoaded.current) {
      fetchData();
      isLoaded.current = true;
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=U2RY4TXA0UM40IJ5"
      );
      const json = await response.json();
      setData(json);
    } catch (err) {
      console.error(err);
    }
  };

  // const newData = [];
  // data.forEach((obj) => {
  //   if (!newData.some((o) => o.name === obj.name)) {
  //     newData.push({ ...obj });
  //   }
  // });

  return (
    <View>
      <FlatList
        // keyExtractor={(item) => item.source.replace(' ', '').concat(item.title.replace(' ', ''))}
        data={data.feed}
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
            ticker={
              !!item.ticker_sentiment[0] ? 
              item.ticker_sentiment.map((item) => {
                return item.ticker
              }) : 
              undefined
            }
          />
        )}
      />
    </View>
  );
}
