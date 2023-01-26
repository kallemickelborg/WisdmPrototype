import React from 'react';
import { Text } from 'react-native';

import { fontSizes } from '../../globalStyles';

const makeTextInputs = ( defaultStyles ) => {
  return function({ style, children }) {
    return (
      <Text
        style={[ defaultStyles, style ]}
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