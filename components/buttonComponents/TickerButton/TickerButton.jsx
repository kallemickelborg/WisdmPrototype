import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import LineChart from "../../chartTemplates/LineChart/LineChart";

import { SmallHeadings, BodyThree } from "../../Text/Text";

import { styles } from "./TickerButtonStyles";

import { responsivePixels } from "../../../globalStyles";
import { colorObject } from "../../../redux/reducers/colorSlice";

const TickerButton = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage7d,
  sparkline,
  logoUrl,
  onPress,
  isSelected
}) => {
  const colors = useSelector(colorObject);
  const priceChangeColor = priceChangePercentage7d > 0 ? colors.graphPositive : colors.graphNegative;

  return (
    <CustomButton 
      onPress={onPress} 
      style={[ styles.buttonWrapper ]} 
      isSelected={isSelected}
      >
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
        {/* Chart */}
        <LineChart
          chartHeight={responsivePixels(40)}
          chartWidth={responsivePixels(125)}
          stroke="large"
          color={priceChangeColor}
          coordinates={sparkline}
        />
        {/* Right Side */}
        <View style={[ styles.rightWrapper ]}>
          <SmallHeadings style={[ styles.subtitle ]}>
            ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
          </SmallHeadings>
          <Text style={[styles.subtitle, { color: priceChangeColor }]}>
            {priceChangePercentage7d.toFixed(2)}%
          </Text>
        </View>
    </CustomButton>
  );
};

export default TickerButton;