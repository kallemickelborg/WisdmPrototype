import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../../../globalStyles';

const LargeNumbers = ({ style, children }) => {
  return (
    <Text 
      style={[ fontSizes.largeNumbers, style ]}
    >
        {children}
    </Text>
  )
};

export default LargeNumbers;