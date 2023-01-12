import React, { useCallBack, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { Dimensions, Button, FlatList } from "react-native";
import moment from "moment";

import { styles } from './NewsArticleStyles';

const NewsArticles = ({
  title,
  source,
  summary,
  url,
  banner_image,
  timestamp,
  overall_sentiment_score,
  overall_sentiment_label,
  ticker,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const priceChangeColor = overall_sentiment_score > 0 ? "green" : "red";

  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(url).catch((err) => {
          console.error("Failed opening page because: ", err);
          alert("Failed to open page");
        });
      }}
    >
      <View style={styles.wrapperContainer}>
        <View style={styles.itemWrapper}>
          <View style={styles.textWrapper}>
            <View style={styles.sourceWrapper}>
              <Text style={styles.detail}>Tickers</Text>
              <FlatList
                data={ticker}
                renderItem={({item}) => (
                  <Text>{item}</Text>
                )}
              />
            </View>
          </View>
          {/* Sentiment Score Section */}
          <View style={styles.textWrapper}>
            <View style={styles.sourceWrapper}>
              <Text style={styles.detail}>{source}</Text>
              <Text style={styles.detail}>
                {moment(timestamp).format("DD MMM, YYYY")}
              </Text>
            </View>
            {
              !isExpanded ?
              <View>
                <Text style={styles.title}>{title.length <= 100 ? title : `${title.slice(0, 100)}...`}</Text>
                <Button onPress={() => {setIsExpanded(true); console.log(title);}} title="Expand"></Button>
              </View> :
              <View>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.textWrapper}>
                  <Text style={styles.subtitle}>{summary}</Text>
                </View>
                <Button onPress={() => {setIsExpanded(false); console.log(title)}} title="Colapse"></Button>
              </View> 
            }
            <Text style={styles.title}>Sentiment Score</Text>
            <View style={styles.sentimentWrapper}>
              {/* <Text style={styles.title}>{url}</Text> */}
              <Text style={styles.subtitle}>{overall_sentiment_label}</Text>
              <Text style={[styles.subtitle, { color: priceChangeColor }]}>
                {overall_sentiment_score}
              </Text>
              {/* <Text style={styles.huge}>{[ticker]}</Text> */}
            </View>
          </View>
          {/* Left Side */}
          <Image source={{ uri: banner_image || null }} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsArticles;