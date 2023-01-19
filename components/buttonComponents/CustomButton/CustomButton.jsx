import React from 'react'; 
import { TouchableOpacity } from 'react-native';

import { styles } from './CustomButtonStyles';

const CustomButton = ({ onPress, style, children }) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={[ styles.button, style]}
    >
      {children}
  </TouchableOpacity>
  )
};

export default CustomButton;