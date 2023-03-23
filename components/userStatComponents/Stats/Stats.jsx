import React from 'react';
import { View } from 'react-native';

import { LargeHeadings, BodyThree } from '../../Text/Text';

import { radius, responsivePixels, spacing } from '../../../globalStyles';
import { makeKeyIntoTitle } from '../../../functions/manipulateStrings';

const Stats = ({
  category,
  number
}) => {
  return (
  <View style={{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: spacing.large }}>
    <View style={{ backgroundColor: 'white', width: responsivePixels(100), borderRadius: radius.large, marginBottom: responsivePixels(10) }}>
      <LargeHeadings style={{ textAlign: 'center' }}>{number}</LargeHeadings>
    </View>
    <BodyThree>{makeKeyIntoTitle(category)}</BodyThree>
  </View>
  )
}

export default Stats;