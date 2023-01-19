import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../../../globalStyles';

const LargeHeadings = ({ style, children }) => {
  return (
    <Text 
      style={[ fontSizes.largeHeadings, style ]}
    >
        {children}
    </Text>
  )
};

export default LargeHeadings;