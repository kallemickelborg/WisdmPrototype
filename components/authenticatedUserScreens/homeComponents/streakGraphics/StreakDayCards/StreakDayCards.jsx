import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import CustomButton from '../../../../buttonComponents/CustomButton/CustomButton'

import { SmallHeadings, BodyThree } from '../../../../Text/Text';

import { styles } from './StreakDayCardsStyles';
import { colorObject } from '../../../../../redux/reducers/colorSlice';

const StreakDayCards = ({
  dateObject,
  currentDayName,
  highlightedDays
}) => {
  const colors = useSelector(colorObject);
  const {date, month, day, dayAbbreviated} = dateObject;
  return (
    <CustomButton 
      isSelected={highlightedDays.includes(day) ? true : false}
      style={[
        styles.cardContainer,
        {
          borderColor: 
          currentDayName === day ?
          colors.tertiary :
          'transparent'
        }
      ]}
      selectedStyle={{ borderColor: 'transparent' }}
    >
      <SmallHeadings style={[ styles.date ]}>{date}</SmallHeadings>
      <BodyThree>{dayAbbreviated}</BodyThree>
    </CustomButton>
  )
}

export default StreakDayCards;