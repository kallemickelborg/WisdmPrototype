import React from 'react';
import { View } from 'react-native';

import { styles } from './InnerContainerStyles';

const InnerContainer = ({ style, children }) => {
  return (
    <View style={[ styles.container, style ]}>
      {children}
    </View>
  )
}

export default InnerContainer;