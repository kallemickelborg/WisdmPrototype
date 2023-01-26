import React from "react";

import InnerContainer from "../../../containers/InnerContainer/InnerContainer";
import NavigationButtons from "../../NavigationButtons/NavigationButtons";

import { LargeHeadings, SubHeadings } from "../../../Text/Text";

import { spacing } from "../../../../globalStyles";

const OnboardingInfoStart = ({ setProgress }) => {
  return (
    <>
      <InnerContainer>
        <LargeHeadings style={{ marginBottom: spacing.small }}>
          {`Learning about \ninvesting just got \neasier with \nWisdm.`}
        </LargeHeadings>
        <SubHeadings>
          {`To get started, answer a few questions to \npersonalize your experience on the app`}
        </SubHeadings>
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

export default OnboardingInfoStart;