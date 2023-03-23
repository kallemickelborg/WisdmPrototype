import React from 'react';
import { View } from 'react-native';

import Stats from '../Stats/Stats';

import { SmallHeadings } from '../../Text/Text';

import { radius, dimensions, spacing } from '../../../globalStyles';

const StatWrapper = ({ 
  statArray = [
    { category: 'totalSessions',  number: 0 },
    { category: 'minutes',  number: 0 },
    { category: 'largestStreak',  number: 0 }
] 
}) => {
  return (
    <View
      style={{ 
        backgroundColor: 'lavender', 
        borderRadius: radius.extraLarge,
        paddingTop: spacing.large,
        paddingHorizontal: spacing.large,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column' 
      }}
    >
      <SmallHeadings style={{ textAlign: 'center' }}>
        Look at you go! 💪
      </SmallHeadings>
      <View
        style={{ 
          width: dimensions.windowWidth * 0.8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row' 
        }}
      >      
        {
          statArray.map((item) => {
            return <Stats
              key={`${item.category}`}
              category={item.category}
              number={item.number}
            />
          })
        }
      </View>
    </View>
  )
}

export default StatWrapper;