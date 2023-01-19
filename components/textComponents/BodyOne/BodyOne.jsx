import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../../../globalStyles';

const BodyOne = ({ style, children }) => {
  return (
    <Text 
      style={[ fontSizes.bodyOne, style ]}
    >
        {children}
    </Text>
  )
};

export default BodyOne;