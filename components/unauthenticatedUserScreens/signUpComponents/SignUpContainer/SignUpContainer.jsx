import React, { useState } from 'react';

import MainContainer from '../../../containers/MainContainer/MainContainer';
import OnboardingProgressBar from '../OnboardingProgressBar/OnboardingProgressBar';
import OnboardingInfoStart from '../OnboardingInfoStart/OnboardingInfoStart';
import OnboardingInfoLevel from '../OnboardingInfoLevel/OnboardingInfoLevel';
import OnboardingInfoWatchlist from '../OnboardingInfoWatchlist/OnboardingInfoWatchlist';
import OnboardingInfoTopics from '../OnboardingInfoTopics/OnboardingInfoTopics';
import SignUp from '../SignUp/SignUp';
import Trial from '../Trial/Trial';

const SignUpContainer = () => {
  const [isStart, setIsStart] = useState(true);
  const [isLevel, setIsLevel] = useState(false);
  const [isWatchlist, setIsWatchlist] = useState(false);
  const [isTopics, setIsTopics] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isTrial, setIsTrial] = useState(false);
  const loadPage = (currPage, nextPage, component) => {
    if ( (currPage && nextPage) || !currPage ) {
      return null;
    } else if ( currPage ) {
      return component;
    }
  }
  return (
    <MainContainer>
        {
          !isTrial ?
          <OnboardingProgressBar 
            barOne={isStart} 
            barTwo={isLevel}
            barThree={isWatchlist}
            barFour={isTopics}
            barFive={isSignUp}
          /> :
          null
        }
        { loadPage(isStart, isLevel, <OnboardingInfoStart setProgress={setIsLevel}/>) }
        { loadPage(isLevel, isWatchlist, <OnboardingInfoLevel setProgress={setIsWatchlist}/>) }
        { loadPage(isWatchlist, isTopics, <OnboardingInfoWatchlist setProgress={setIsTopics}/>) }
        { loadPage(isTopics, isSignUp, <OnboardingInfoTopics setProgress={setIsSignUp}/>) }
        { loadPage(isSignUp, isTrial, <SignUp setProgress={setIsTrial}/>) }
        { loadPage(isTrial, undefined, <Trial/>) }
    </MainContainer>
  )
}

export default SignUpContainer;