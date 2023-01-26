import React from 'react';
import { View, Text, FlatList } from 'react-native';

const LineChart = ({
  height = width,
  width = height,
  currentPrice,
  logoUrl,
  name,
  symbol,
  priceChangePercentage7d,
  sparkline
}) => {
  console.log(sparkline);
  return (
    <FlatList
      data={sparkline}
      renderItem={(item) => {
        return (
          <View>
            <Text style={{ color: 'red' }}>{item.item.x}</Text>
            <Text style={{ color: 'red' }}>{item.item.y}</Text>
          </View>
        )
      }}
    />
  )
}

export default LineChart;