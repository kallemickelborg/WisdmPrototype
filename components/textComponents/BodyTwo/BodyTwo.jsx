import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../../../globalStyles';

const BodyTwo = ({ style, children }) => {
  return (
    <Text 
      style={[ fontSizes.bodyTwo, style ]}
    >
        {children}
    </Text>
  )
};

export default BodyTwo;