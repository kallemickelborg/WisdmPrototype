import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../../../globalStyles';

const BodyThree = ({ style, children }) => {
  return (
    <Text 
      style={[ fontSizes.bodyThree, style ]}
    >
        {children}
    </Text>
  )
};

export default BodyThree;