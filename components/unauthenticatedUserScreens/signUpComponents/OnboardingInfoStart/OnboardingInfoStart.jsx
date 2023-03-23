import React from "react";
import { View, ScrollView } from "react-native";

import InnerContainer from "../../../containers/InnerContainer/InnerContainer";
import NavigationButtons from "../../NavigationButtons/NavigationButtons";
import PolarChart from "../../../chartTemplates/polarChartComponents/PolarChart/PolarChart";

import { LargeHeadings, SubHeadings } from "../../../Text/Text";

import { spacing, responsivePixels } from "../../../../globalStyles";

// import data from '../../../../sample-polar-data.json';

const data = {
  "influencerScore": {
    "Accuracy": 0.9,
    "Health": 0.1,
    "Relevance": 0.9,
    "Impression": 0.1,
    "Timeliness": 0.9,
    // "Another": 0.1,
    // "And": 0.9,
    // "Alexandra": 0,
    // "Something": 0.9,
    // "Carpet": 0.4,
    // "Get": 0.3,
    // "It": 0.5,
    // "Jonathan": 0.25
  },
  "scoreInfo": {
    "Name": "Stock Name",
    "BorderColor": "magenta"
  }
}

const dataTwo = {
  "influencerScore": {
    "Accuracy": 0.4,
    "Health": 0.7,
    "Relevance": 0.2,
    "Impression": 0.9,
    "Timeliness": 0.1,
    // "Another": 0.5,
    // "And": 0.7,
    // "Alexandra": 1,
    // "Something": 0,
    // "Carpet": 0.4,
    // "Get": 0.3,
    // "It": 0.5,
    // "Jonathan": 0.25
  },
  "scoreInfo": {
    "Name": "Stock Name",
    "BorderColor": "teal"
  }
}

const dataThree = {
  "influencerScore": {
    "Accuracy": 0.1,
    "Health": 0.3,
    "Relevance": 0.6,
    "Impression": 0.2,
    "Timeliness": 0.9,
    // "Another": 0.3,
    // "And": 0,
    // "Alexandra": 0.5,
    // "Something": 0.7,
    // "Carpet": 0.4,
    // "Get": 0.3,
    // "It": 0.5,
    // "Jonathan": 0.25
  },
  "scoreInfo": {
    "Name": "Stock Name",
    "BorderColor": "navy"
  }
}

const OnboardingInfoStart = ({ setProgress }) => {
  const chartDiameter = responsivePixels(400);
  return (
    <>
      <ScrollView>
        <InnerContainer>
          <View style={{ marginStart: '50%', transform: [{ translateX: -chartDiameter * 0.5 }], marginVertical: responsivePixels(14) }}>
            <PolarChart
              stroke={3}
              toPoint={1}
              labelFontSize={responsivePixels(16)}
              chartDiameter={chartDiameter}
              hasInnerShapes={true}
              hasDivisionLines={true}
              hasLabels={true}
              polarData={[ data, dataTwo, dataThree ]}
              containerStyle={{ marginTop: responsivePixels(20), position: 'relative' }}
              // chartOutlineLineColor={'teal'}
              // chartOutlineBackgroundColor={'white'}
              // chartOutlineCenterColor={'pink'}
              // chartOutlineLabelColor={'orange'}
            />
          </View>
          <LargeHeadings style={{ marginBottom: spacing.small }}>
            {`Learning about \ninvesting just got \neasier with \nWisdm.`}
          </LargeHeadings>
          <SubHeadings>
            {`To get started, answer a few questions to \npersonalize your experience on the app`}
          </SubHeadings>
        </InnerContainer>
      </ScrollView>
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