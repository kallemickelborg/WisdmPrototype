import React from "react";
import { View, Text, Image } from "react-native";

import CustomButton from "../buttonComponents/CustomButton/CustomButton";

import { SmallHeadings, BodyThree } from "../Text/Text";

import { styles } from './ListItemStyles'

const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage7d,
  logoUrl,
  onPress,
}) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? "green" : "red";

  return (
    <CustomButton onPress={onPress} style={[ styles.buttonWrapper ]}>
      {/* <View style={styles.itemWrapper}> */}
        {/* Left Side */}
        <View style={styles.leftWrapper}>
          <View style={[ styles.imageWrapper ]}>
            <Image source={{ uri: logoUrl }} style={styles.image} />
          </View>
          <View style={styles.titlesWrapper}>
            <SmallHeadings >{name}</SmallHeadings>
            <BodyThree >{symbol.toUpperCase()}</BodyThree>
          </View>
        </View>

        {/* Right Side */}
        <View style={styles.rightWrapper}>
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
