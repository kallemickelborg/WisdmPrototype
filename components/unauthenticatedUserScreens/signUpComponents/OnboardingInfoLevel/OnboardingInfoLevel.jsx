import React, { useState } from 'react';

import { spacing } from '../../../../globalStyles';

import InnerContainer from '../../../containers/InnerContainer/InnerContainer';
import CustomButton from '../../../buttonComponents/CustomButton/CustomButton';
import NavigationButtons from '../../NavigationButtons/NavigationButtons';

import { BodyOne, BodyThree } from '../../../Text/Text';

const OnboardingInfoLevel = ({ setProgress }) => {
  const [ selected, setSelected ] = useState('');
  const levelButtons = [
    { name: 'advanced', text: 'Champion Megamind Investor', icon: '' },
    { name: 'intermediate', text: 'Neighborhood Watch Investor', icon: '' },
    { name: 'beginner', text: 'It\'s-my-first-day-of-school Investor', icon: '' }
  ]
  return (
    <>
      <InnerContainer>
        <BodyOne style={{ textAlign: 'center' }}>
          {`What level of investment savvy do you consider yourself?`}
        </BodyOne>
        <BodyThree style={{ textAlign: 'center', marginBottom: spacing.large }}>
          {`(Select One)`}
        </BodyThree>
        {
          levelButtons.map((item) => (
            <CustomButton
              key={item.name}
              onPress={() => setSelected(item.name)}
              isSelected={item.name === selected ? true : false}
              style={{ marginBottom: spacing.large }}
            >
              <BodyThree>
                {item.text}
              </BodyThree>
            </CustomButton>
          ))
        }
      </InnerContainer>
      <NavigationButtons
        topButtonTitle="Next"
        bottomButtonTitle="Skip"
        topButtonOnPress={() => setProgress(true)}
        // bottomButtonOnPress={}
      />
    </>
  )
}

export default OnboardingInfoLevel;