import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

import { styles } from './StreakGraphicsContainerStyles';

import { findStreakDaysInCurrentWeek, days, currentDayName, currentDayValue } from '../streakLogic';
import StreakDayCards from '../StreakDayCards/StreakDayCards';

const StreakGraphicsContainer = ({
  containerStyles,
  streak,
}) => {
  const highlightedDays = findStreakDaysInCurrentWeek(currentDayValue, streak);
  return (
    <SafeAreaView style={[styles.streakContainer, containerStyles]}>
      <ScrollView horizontal={true} style={[]}>
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
    </SafeAreaView>
  )
}

export default StreakGraphicsContainer;