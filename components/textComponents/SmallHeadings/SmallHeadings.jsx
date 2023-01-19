import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../../../globalStyles';

const SmallHeadings = ({ style, children }) => {
  return (
    <Text 
      style={[ fontSizes.smallHeadings, style ]}
    >
        {children}
    </Text>
  )
};

export default SmallHeadings;