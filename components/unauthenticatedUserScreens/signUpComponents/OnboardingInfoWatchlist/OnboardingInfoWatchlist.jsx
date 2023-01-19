import React from 'react';

import InnerContainer from '../../../containers/InnerContainer/InnerContainer';
import NavigationButtons from '../../NavigationButtons/NavigationButtons';
import BodyOne from '../../../textComponents/BodyOne/BodyOne';
import BodyThree from '../../../textComponents/BodyThree/BodyThree';


const OnboardingInfoWatchlist = ({ setProgress }) => {
  return (
    <>
      <InnerContainer>
        <BodyOne style={{ textAlign: 'center' }}>
          {`What stocks are you interested in keeping up with?`}
        </BodyOne>
        <BodyThree style={{ textAlign: 'center' }}>
          {`(Select at least three)`}
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

export default OnboardingInfoWatchlist;