import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../../../globalStyles';

const FinePrint = ({ style, children }) => {
  return (
    <Text 
      style={[ fontSizes.finePrint, style ]}
    >
        {children}
    </Text>
  )
};

export default FinePrint;