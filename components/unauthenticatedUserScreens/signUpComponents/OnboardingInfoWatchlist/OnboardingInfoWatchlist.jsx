import React from 'react';

import InnerContainer from '../../../containers/InnerContainer/InnerContainer';
import NavigationButtons from '../../NavigationButtons/NavigationButtons';

import LineChart from '../../../chartTemplates/LineChart/LineChart';

import sampleData from '../../../../sample-data.json';

import { BodyOne, BodyThree } from '../../../Text/Text';


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
        <LineChart
          height={100}
          width={400}
          color={'blue'}
          sparkline={sampleData.sparkline_in_7d.price}
        />
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