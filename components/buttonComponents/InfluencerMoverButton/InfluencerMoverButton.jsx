import React from 'react';
import { View, Text } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import LineChart from '../../chartTemplates/LineChart/LineChart';

const InfluencerMoverButton = ({
  influencerScore = {Accuracy: 0.1, Health: 0.1, Relevance: 0.1, Impression: 0.1, Timeliness: 0.1},
  price = 1,
  coordinates,
  isInfluencer = false
}) => {
  const getWeightedScore = (influencerScore) => (Object.values(influencerScore).reduce((prev, curr)  => prev + curr, 0) / Object.keys(influencerScore).length) * 100;
  const getPriceChangePercentage = (beggingPrice, endPrice) => (endPrice - beggingPrice) / beggingPrice * 100;

  const priceChangePercentage = getPriceChangePercentage(coordinates[0].y, coordinates[coordinates.length - 1].y);
  return (                    
    <CustomButton isSelected={true} style={{ borderWidth: 0 }}>
      <LineChart
        coordinates={coordinates}
        chartHeight={200}
        chartWidth={300}
      />
      {
        isInfluencer ?
        <Text>{getWeightedScore(influencerScore)}</Text> :
        <Text>
          {
            `
              $${price}
              ${`${priceChangePercentage > 0 ? '+' : '-'}${priceChangePercentage.toFixed(2)}%`}
            `
          }
        </Text>
      }
    </CustomButton>
  )
}

export default InfluencerMoverButton;