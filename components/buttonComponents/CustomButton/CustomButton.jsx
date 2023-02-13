import React from 'react'; 
import { TouchableOpacity } from 'react-native';

import { styles } from './CustomButtonStyles';

const CustomButton = ({ onPress, style, children, isSelected }) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={[ styles.button, isSelected ? styles.selectedButton : null, style]}
    >
      {children}
  </TouchableOpacity>
  )
};

export default CustomButton;