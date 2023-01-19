import React from 'react';
import { View } from 'react-native';

import { styles } from './OnboardingProgressBarStyles';

import { colors } from '../../../../globalStyles';

const OnboardingProgressBar = ({
  barOne,
  barTwo,
  barThree,
  barFour,
  barFive
}) => {
  const isColoredFunc = (isTrue) => {
    return isTrue ? { backgroundColor: colors.tertiary } : undefined;
  }
  return (
    <View style={[ styles.container ]}>
      <View style={[ styles.barSegment, isColoredFunc(barOne) ]}></View>
      <View style={[ styles.barSegment, isColoredFunc(barTwo) ]}></View>
      <View style={[ styles.barSegment, isColoredFunc(barThree) ]}></View>
      <View style={[ styles.barSegment, isColoredFunc(barFour) ]}></View>
      <View style={[ styles.barSegment, isColoredFunc(barFive) ]}></View>
    </View>
  )
}

export default OnboardingProgressBar