import React from 'react';
import { View } from 'react-native';

import { styles } from './MainContainerStyles';

const MainContainer = ({ style, children }) => {
  return (
    <View style={[ styles.container, style ]}>
      {children}
    </View>
  )
}

export default MainContainer;