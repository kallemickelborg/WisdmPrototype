import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../../../globalStyles';

const ModalHeadings = ({ style, children }) => {
  return (
    <Text 
      style={[ fontSizes.modalHeadings, style ]}
    >
        {children}
    </Text>
  )
};

export default ModalHeadings;