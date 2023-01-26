import React from 'react';
import { View, Text } from 'react-native';

import CustomButton from '../../buttonComponents/CustomButton/CustomButton';

import { SmallHeadings, SubHeadings } from '../../Text/Text';

import { styles } from './NavigationButtonsStyles';

const NavigationButtons = ({
  topButtonTitle, 
  bottomButtonTitle, 
  bottomButtonAdditionalTitle, 
  topButtonOnPress, 
  bottomButtonOnPress
  }) => {
  return (
    <View style={[ styles.buttonsContainer ]}>
      <CustomButton
        onPress={topButtonOnPress}
        style={[ styles.topButton, styles.button ]}
      >
        <SmallHeadings
          style={[styles.topButtonText, styles.text]}
        >
          {topButtonTitle}
        </SmallHeadings>
      </CustomButton>
      <CustomButton
        onPress={bottomButtonOnPress}
        style={[ styles.bottomButton, styles.button ]}
      >
        <Text>
          {
            bottomButtonAdditionalTitle ?
            <SubHeadings>{bottomButtonAdditionalTitle}</SubHeadings> :
            null
          }
          <SmallHeadings
            style={[ styles.bottomButtonText, styles.text ]}
          >
            {bottomButtonTitle}
          </SmallHeadings>
        </Text>
      </CustomButton>
    </View>
  )
}

export default NavigationButtons;