import React from 'react'; 
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './CustomButtonStyles';

const CustomButton = ({ onPress, style, children, isSelected }) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={[ styles.button, style, isSelected ? styles.selectedButton : null]}
    >
      {children}
  </TouchableOpacity>
  )
};

export default CustomButton;