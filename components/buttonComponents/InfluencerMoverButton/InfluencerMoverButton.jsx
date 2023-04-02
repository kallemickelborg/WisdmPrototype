import React from 'react';
import { View, Image } from 'react-native';
import { useSelector } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import LineChart from '../../chartTemplates/LineChart/LineChart';

import { responsivePixels } from '../../../globalStyles';
import { FinePrint, MediumHeadings, SmallHeadings, SubHeadings } from '../../Text/Text';

import { styles, containerWidth, containerPadding, chartPadding } from './InfluencerMoverButtonStyles';
import { colorObject } from '../../../redux/reducers/colorSlice';

const InfluencerMoverButton = ({
  name = 'Some Name',
  abbreviation = name,
  influencerScore = {Accuracy: 0.1, Health: 0.1, Relevance: 0.1, Impression: 0.1, Timeliness: 0.1},
  currentPrice = 0,
  logoUrl = require('../../../assets/icon.png'),
  coordinates,
  onPress,
  isInfluencer = false,
  containerStyles
}) => {
  const colors = useSelector(colorObject);
  const getWeightedScore = (influencerScore) => (Object.values(influencerScore).reduce((prev, curr)  => prev + curr, 0) / Object.keys(influencerScore).length) * 100;
  const getPriceChangePercentage = (beggingPrice, endPrice) => (endPrice - beggingPrice) / beggingPrice * 100;

  const priceChangePercentage = getPriceChangePercentage(coordinates[0].y, coordinates[coordinates.length - 1].y);
  const graphGrowthColor = priceChangePercentage >= 0 ? colors.graphPositive : colors.graphNegative;
  return (                    
    <CustomButton isSelected={true} style={[ styles.buttonContainer, containerStyles ]}>
      <View style={[ styles.textAndLogoWrapper ]}>
        <View style={[ styles.logoAndNameWrapper ]}>
          <Image source={logoUrl} style={[ styles.logo ]}/>
          <View style={[ styles.textNameWrapper ]}>
            <SmallHeadings>{ abbreviation.length > 5 ? `${abbreviation.toUpperCase().slice(0,5)}...` : abbreviation.toUpperCase()}</SmallHeadings>
            <FinePrint>{name}</FinePrint>
          </View>
        </View>
        {
          isInfluencer ?
          <View 
            style={[ 
              styles.influencerScoreWrapper, 
              {backgroundColor: colors.primary, borderColor: colors.tertiary} 
            ]}
          >
            <MediumHeadings>{getWeightedScore(influencerScore)}</MediumHeadings>
          </View> :
          <View style={[ styles.priceWrapper ]}>
            <SmallHeadings>${currentPrice}</SmallHeadings>
            <SubHeadings style={{ color: graphGrowthColor }}>{priceChangePercentage >= 0 ? '+' : '-'}{priceChangePercentage.toFixed(2)}%</SubHeadings>
          </View>
        }
      </View>
      <View 
        style={[ 
          styles.lineChartWrapper, 
          { backgroundColor: colors.primary, } 
        ]}
      >
        <LineChart
          coordinates={coordinates}
          chartHeight={responsivePixels(40)}
          chartWidth={containerWidth - containerPadding * 2 - chartPadding * 2}
          strokeColor={graphGrowthColor}
          containerStyle={{ backgroundColor: colors.primary }}
          isCentralLine={true}
          centralLineColor={ colors.quaternary }
          centralLineDashWidth={responsivePixels(10)}
        />
      </View>
    </CustomButton>
  )
}

export default InfluencerMoverButton;