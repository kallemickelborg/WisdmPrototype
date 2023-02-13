import React from "react";
import { View, Text, Image } from "react-native";

import CustomButton from "../buttonComponents/CustomButton/CustomButton";

import LineChart from "../chartTemplates/LineChart/LineChart";

import { SmallHeadings, BodyThree } from "../Text/Text";

import { styles } from './ListItemStyles';

import { responsivePixels } from "../../globalStyles";

const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage7d,
  sparkline,
  logoUrl,
  onPress,
}) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? "green" : "red";

  return (
    <CustomButton onPress={onPress} style={[ styles.buttonWrapper ]}>
      {/* <View style={styles.itemWrapper}> */}
        {/* Left Side */}
        <View style={[ styles.leftWrapper ]}>
          <View style={[ styles.imageWrapper ]}>
            <Image source={{ uri: logoUrl }} style={styles.image} />
          </View>
          <View style={styles.titlesWrapper}>
            <SmallHeadings>{symbol.toUpperCase()}</SmallHeadings>
            <BodyThree>{name.length > 10 ? `${name.slice(0, 9)}...` : name}</BodyThree>
          </View>
        </View>
        <LineChart
          chartHeight={responsivePixels(50)}
          chartWidth={responsivePixels(100)}
          color={priceChangeColor}
          sparkline={sparkline}
        />

        {/* Right Side */}
        <View style={[ styles.rightWrapper ]}>
          <SmallHeadings style={{ fontSize: 14 }}>
            ${currentPrice.toLocaleString("en-US", { currency: "USD" })} USD
          </SmallHeadings>
          <Text style={[styles.subtitle, { color: priceChangeColor }]}>
            {priceChangePercentage7d.toFixed(2)}%
          </Text>
        </View>
      {/* </View> */}
    </CustomButton>
  );
};

export default ListItem;
