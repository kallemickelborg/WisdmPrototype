import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { fontSizes } from '../../globalStyles';
import { colorObject } from '../../redux/reducers/colorSlice';

const makeTextInputs = ( defaultStyles ) => {
  return function({ style, children }) {
    const colors = useSelector(colorObject);
    return (
      <Text
        style={[ defaultStyles, { color: colors.quaternary }, style ]}
      > 
        {children}
      </Text>
    )
  }
};

export const LargeNumbers = makeTextInputs(fontSizes.largeNumbers);

export const LargeHeadings = makeTextInputs(fontSizes.largeHeadings);

export const MediumHeadings = makeTextInputs(fontSizes.mediumHeadings);

export const ModalHeadings = makeTextInputs(fontSizes.modalHeadings);

export const SmallHeadings = makeTextInputs(fontSizes.smallHeadings);

export const SubHeadings = makeTextInputs(fontSizes.subHeadings);

export const BodyOne = makeTextInputs(fontSizes.bodyOne);

export const BodyTwo = makeTextInputs(fontSizes.bodyTwo);

export const BodyThree = makeTextInputs(fontSizes.bodyThree);

export const FinePrint = makeTextInputs(fontSizes.finePrint);