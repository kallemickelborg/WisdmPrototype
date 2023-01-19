import React from 'react';
import { View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import CustomButton from '../../../buttonComponents/CustomButton/CustomButton';
import MediumHeadings from '../../../textComponents/MediumHeadings/MediumHeadings';
import SmallHeadings from '../../../textComponents/SmallHeadings/SmallHeadings';
import SubHeadings from '../../../textComponents/SubHeadings/SubHeadings';
import BodyOne from '../../../textComponents/BodyOne/BodyOne';
import FinePrint from '../../../textComponents/FinePrint/FinePrint';

import { styles } from './TrialStyles';

const Trial = () => {
  const makeCheckmarkViews = (text) => {
    return (
      <View style={[ styles.checkmarkContainer ]}>
        <Ionicons name={'checkmark-circle'} size={25} style={[ styles.checkmark ]}/>
        <SmallHeadings>
          {text}
        </SmallHeadings>
      </View>
    )
  }
  return (
    <>
      <MediumHeadings style={[ styles.heading ]}>
        {`Get access to \neverything Wisdm \nhas to offer.`}
      </MediumHeadings>
      <SubHeadings style={[ styles.trialSubHeading ]}>{`Start your free 1-week trial to try out Wisdm.`}</SubHeadings>
      { makeCheckmarkViews(`Access to influence insight scores`) }
      { makeCheckmarkViews(`Informative lessons for any skill level`) }
      { makeCheckmarkViews(`Relevant news bites to stay up to date`) }
      <BodyOne style={[ styles.planSubHeading ]}>{`Choose Your Plan`}</BodyOne>
      <CustomButton 
        style={[ styles.finePrintButton ]}
        // onPress={}
      >
        <FinePrint >{`Restore Purchase - Terms & Conditions`}</FinePrint>
      </CustomButton>
      <CustomButton 
        // onPress={}
        style={[ styles.startTrialButton ]}
      >
        <SmallHeadings style={[ styles.startTrialButtonText ]}>{`Start your 7-day free trial`}</SmallHeadings>
      </CustomButton>
    </>
  )
}

export default Trial;