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
  symbol = name,
  currentPrice,
  priceChangePercentage,
  sparkline,
  logoUrl,
  onPress,
  isSelected,
  wrapperStyle,
  selectedWrapperStyle
}) => {
  const colors = useSelector(colorObject);
  const priceChangeColor = priceChangePercentage > 0 ? colors.graphPositive : colors.graphNegative;

  return (
    <CustomButton 
      onPress={onPress} 
      style={[ styles.buttonWrapper, wrapperStyle ]}
      selectedStyle={selectedWrapperStyle} 
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
            {priceChangePercentage.toFixed(2)}%
          </Text>
        </View>
    </CustomButton>
  );
};

export default TickerButton;