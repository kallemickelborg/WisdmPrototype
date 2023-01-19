import React from 'react';

import InnerContainer from '../../../containers/InnerContainer/InnerContainer';
import NavigationButtons from '../../NavigationButtons/NavigationButtons';
import BodyOne from '../../../textComponents/BodyOne/BodyOne';
import BodyThree from '../../../textComponents/BodyThree/BodyThree';


const OnboardingInfoTopics = ({ setProgress }) => {
  return (
    <>
      <InnerContainer>
        <BodyOne style={{ textAlign: 'center' }}>
          {`What are you interested in learning on Wisdm?`}
        </BodyOne>
        <BodyThree style={{ textAlign: 'center' }}>
          {`(Select at least one)`}
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

export default OnboardingInfoTopics;