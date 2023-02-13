import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import CustomButton from '../../buttonComponents/CustomButton/CustomButton';

import { SmallHeadings, SubHeadings } from '../../Text/Text';

import { styles } from './NavigationButtonsStyles';

import { colorObject } from '../../../redux/reducers/colorSlice';

const NavigationButtons = ({
  topButtonTitle, 
  bottomButtonTitle, 
  bottomButtonAdditionalTitle, 
  topButtonOnPress, 
  bottomButtonOnPress
  }) => {
  const colors = useSelector(colorObject);
  return (
    <View style={[ styles.buttonsContainer ]}>
      <CustomButton
        onPress={topButtonOnPress}
        style={[ { backgroundColor: colors.quaternary }, styles.button ]}
      >
        <SmallHeadings
          style={[ { color: colors.primary }, styles.text]}
        >
          {topButtonTitle}
        </SmallHeadings>
      </CustomButton>
      <CustomButton
        onPress={bottomButtonOnPress}
        style={[ { backgroundColor: colors.primary }, styles.button ]}
      >
        <Text>
          {
            bottomButtonAdditionalTitle ?
            <SubHeadings>{bottomButtonAdditionalTitle}</SubHeadings> :
            null
          }
          <SmallHeadings
            style={[ { color: colors.quaternary }, styles.text ]}
          >
            {bottomButtonTitle}
          </SmallHeadings>
        </Text>
      </CustomButton>
    </View>
  )
}

export default NavigationButtons;