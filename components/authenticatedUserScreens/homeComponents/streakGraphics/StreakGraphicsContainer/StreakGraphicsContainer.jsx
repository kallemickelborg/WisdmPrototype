import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './StreakGraphicsContainerStyles';

import { findStreakDaysInCurrentWeek, days } from '../streakLogic';

const StreakGraphicsContainer = ({
  containerStyles,
  streak,
  day = 5
}) => {

  const streakDays = findStreakDaysInCurrentWeek(day, streak);
  return (
    <View style={[styles, containerStyles]}>
      {
        days.map((item) => (
          <Text
            key={item.name} 
            style={{ backgroundColor: streakDays.includes(item.name) ? 'red' : 'white' }}
          >
            {item.name}
          </Text>
        ))
      }
    </View>
  )
}

export default StreakGraphicsContainer;