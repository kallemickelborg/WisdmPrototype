import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../../../globalStyles';

const MediumHeadings = ({ style, children }) => {
  return (
    <Text 
      style={[ fontSizes.mediumHeadings, style ]}
    >
        {children}
    </Text>
  )
};

export default MediumHeadings;