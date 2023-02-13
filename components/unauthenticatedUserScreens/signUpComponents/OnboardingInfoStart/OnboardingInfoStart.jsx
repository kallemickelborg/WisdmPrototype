import React from "react";

import InnerContainer from "../../../containers/InnerContainer/InnerContainer";
import NavigationButtons from "../../NavigationButtons/NavigationButtons";
import PolarChart from "../../../chartTemplates/PolarChart/PolarChart";

import { LargeHeadings, SubHeadings } from "../../../Text/Text";

import { spacing, responsivePixels } from "../../../../globalStyles";

import data from '../../../../sample-polar-data.json';

const OnboardingInfoStart = ({ setProgress }) => {
  return (
    <>
      <InnerContainer>
        <PolarChart
          stroke={3}
          // labelFontSize={20}
          chartDiameter={responsivePixels(300)}
          hasInnerShapes={true}
          polarData={data.influencerScore}
        />
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