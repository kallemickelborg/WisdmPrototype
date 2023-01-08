import React, { useCallBack } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { Dimensions } from "react-native";
import moment from "moment";

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
          <Image source={{ uri: banner_image }} style={styles.image} />
          {/* Left Side */}
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{title.slice(0, 100)}...</Text>
            <View style={styles.sourceWrapper}>
              <Text style={styles.detail}>{source}</Text>
              <Text style={styles.detail}>
                {moment(timestamp).format("DD MMM, YYYY")}
              </Text>
            </View>
            <Text style={styles.subtitle}>{summary}</Text>
          </View>

          {/* Sentiment Score Section */}
          <View style={styles.textWrapper}>
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
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemWrapper: {
    marginTop: 24,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 15,
    width: Dimensions.get("window").width - 32,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textWrapper: {
    padding: 18,
    flexDirection: "column",
  },
  sourceWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sentimentWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    height: 150,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "PoppinsBold",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#000",
  },
  detail: {
    fontSize: 14,
    color: "#FF6600",
  },
  huge: {
    fontSize: 50,
    color: "#FF6600",
  },
});

export default NewsArticles;
