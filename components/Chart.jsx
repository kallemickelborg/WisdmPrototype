import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

//Chart components
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";

//Reanimated components between the JS thread and the Reanimated thread
import { useSharedValue } from "react-native-reanimated";

//Chart data
const { width: SIZE } = Dimensions.get("window");
const Chart = ({
  currentPrice,
  logoUrl,
  name,
  symbol,
  priceChangePercentage7d,
  sparkline,
}) => {
  //Fix 1: Converts the current price of the JS thread to the Reanimated thread
  const latestCurrentPrice = useSharedValue(currentPrice);
  //Fix 2: Fixes bug that caused Chart to only render on first load
  const [chartReady, setChartReady] = useState(false);
  //Changes the color of the 7d price change text depending on if it's positive or negative
  const priceChangeColor = priceChangePercentage7d > 0 ? "green" : "red";

  //Fix 1: Converts the current price of the JS thread to the Reanimated thread
  useEffect(() => {
    latestCurrentPrice.value = currentPrice;
  }, [currentPrice]);

  //Fix 2: Fixes bug that caused Chart to only render on first load
  setTimeout(() => {
    setChartReady(true);
  }, 0);
  if (!chartReady) {
    return null;
  }

  //Changes the color of the 7d price change text depending on if it's positive or negative
  const formatUSD = (value) => {
    "worklet";
    if (value === "") {
      //Adds commas to the thousands place and rounds to 2 decimal places (e.g. 1,000,000.00)
      const formattedValue = `$${latestCurrentPrice.value.toLocaleString(
        "en-US",
        { currency: "USD" }
      )}`;
      return formattedValue;
    }

    //Adds commas to the thousands place and rounds to 2 decimal places (e.g. 1,000,000.00)
    const formattedValue = `$${parseFloat(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;

    return formattedValue;
  };

  //Renders "Loading..." if the sparkline data is not yet available
  if (sparkline.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <ChartPathProvider
      data={{ points: sparkline, smoothingStrategy: "bezier" }}
    >
      <View style={styles.chartWrapper}>
        <View style={styles.titlesWrapper}>
          <View style={styles.upperTitles}>
            <View style={styles.upperLeftTitles}>
              <Image source={{ uri: logoUrl }} style={styles.image} />
              <Text style={styles.subtitle}>
                {name} ({symbol.toUpperCase()})
              </Text>
            </View>
            <Text style={styles.subtitle}>7d</Text>
          </View>
          <View style={styles.lowerTitle}>
            <ChartYLabel
              format={formatUSD}
              style={styles.boldTitle}
            ></ChartYLabel>
            <Text style={[styles.title, { color: priceChangeColor }]}>
              {priceChangePercentage7d.toFixed(2)}%
            </Text>
          </View>
        </View>
        {chartReady ? (
          <View style={styles.chartLineWrapper}>
            <ChartPath height={SIZE / 2} width={SIZE} stroke="black" />
            <ChartDot style={{ backgroundColor: "black" }} />
          </View>
        ) : null}
      </View>
    </ChartPathProvider>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 16,
  },
  titlesWrapper: {
    marginHorizontal: 16,
  },
  upperTitles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  upperLeftTitles: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 24,
    width: 24,
    marginRight: 4,
  },
  lowerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#A9ABB1",
  },
  title: {
    fontSize: 18,
  },
  chartLineWrapper: {
    marginTop: 40,
  },
});

export default Chart;
