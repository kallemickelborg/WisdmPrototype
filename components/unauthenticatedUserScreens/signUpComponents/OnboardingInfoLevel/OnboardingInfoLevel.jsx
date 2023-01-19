import React from 'react';

import InnerContainer from '../../../containers/InnerContainer/InnerContainer';
import NavigationButtons from '../../NavigationButtons/NavigationButtons';
import BodyOne from '../../../textComponents/BodyOne/BodyOne';
import BodyThree from '../../../textComponents/BodyThree/BodyThree';

const OnboardingInfoLevel = ({ setProgress }) => {
  return (
    <>
      <InnerContainer>
        <BodyOne style={{ textAlign: 'center' }}>
          {`What level of investment savvy do you consider yourself?`}
        </BodyOne>
        <BodyThree style={{ textAlign: 'center' }}>
          {`(Select One)`}
        </BodyThree>
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