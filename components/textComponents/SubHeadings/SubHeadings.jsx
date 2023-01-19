import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../../../globalStyles';

const SubHeadings = ({ style, children }) => {
  return (
    <Text 
      style={[ fontSizes.subHeadings, style ]}
    >
        {children}
    </Text>
  )
};

export default SubHeadings;