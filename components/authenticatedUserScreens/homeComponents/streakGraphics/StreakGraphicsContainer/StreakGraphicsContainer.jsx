import React from 'react';
import { ScrollView, Text } from 'react-native';

import { styles } from './StreakGraphicsContainerStyles';

import { findStreakDaysInCurrentWeek, days, currentDayName, currentDayValue } from '../streakLogic';
import StreakDayCards from '../StreakDayCards/StreakDayCards';

const StreakGraphicsContainer = ({
  containerStyles,
  streak,
}) => {
  const highlightedDays = findStreakDaysInCurrentWeek(currentDayValue, streak);
  return (
    <ScrollView horizontal={true} style={[styles.streakContainer, containerStyles]}>
      {
        days.map((item) => (
          <StreakDayCards
          key={item.day}
          name={item.day}
          currentDayName={currentDayName}
          dateObject={item}
          highlightedDays={highlightedDays}
          />
        ))
      }
    </ScrollView>
  )
}

export default StreakGraphicsContainer;