import React from 'react'; 
import { TouchableOpacity } from 'react-native';

import { styles } from './CustomButtonStyles';

const CustomButton = ({ 
  onPress, 
  style, 
  selectedStyle = styles.selectedButton, 
  isSelected, 
  children 
}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={[ styles.button, isSelected ? selectedStyle : null, style]}
    >
      {children}
  </TouchableOpacity>
  )
};

export default CustomButton;