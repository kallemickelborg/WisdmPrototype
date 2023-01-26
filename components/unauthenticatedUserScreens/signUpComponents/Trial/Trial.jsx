import React from 'react';
import { ScrollView, View } from 'react-native';

import { responsivePixels } from '../../../../globalStyles';

import Ionicons from '@expo/vector-icons/Ionicons';

import CustomButton from '../../../buttonComponents/CustomButton/CustomButton';

import { 
  MediumHeadings, ModalHeadings, SmallHeadings, SubHeadings, BodyOne, FinePrint
} from '../../../Text/Text';

import { styles } from './TrialStyles';

const Trial = () => {
  const makeCheckmarkViews = (text) => {
    return (
      <View style={[ styles.checkmarkContainer ]}>
        <Ionicons name={'checkmark-circle'} size={responsivePixels(25)} style={[ styles.checkmark ]}/>
        <SmallHeadings>
          {text}
        </SmallHeadings>
      </View>
    )
  }
  return (
    <ScrollView>
      <MediumHeadings style={[ styles.heading ]}>
        {`Get access to \neverything Wisdm \nhas to offer.`}
      </MediumHeadings>
      <SubHeadings style={[ styles.trialSubHeading ]}>{`Start your free 1-week trial to try out Wisdm.`}</SubHeadings>
      { makeCheckmarkViews(`Access to influence insight scores`) }
      { makeCheckmarkViews(`Informative lessons for any skill level`) }
      { makeCheckmarkViews(`Relevant news bites to stay up to date`) }
      <BodyOne style={[ styles.planSubHeading ]}>{`Choose Your Plan`}</BodyOne>
      <CustomButton style={[ styles.trialButtons ]}>
        <View style={[ styles.bestValueWrapper ]}>
          <FinePrint style={[ styles.bestValueText ]}>{`Best value`}</FinePrint>
        </View>
        <ModalHeadings style={[ styles.trialButtonHeader ]}>{`Annual`}</ModalHeadings>
        <BodyOne>{`$10/month after 14 day trial`}</BodyOne>
      </CustomButton>
      <CustomButton style={[ styles.trialButtons ]}>
        <ModalHeadings style={[ styles.trialButtonHeader ]}>{`Monthly`}</ModalHeadings>
        <BodyOne>{`$15/month after 7 day trial`}</BodyOne>
      </CustomButton>
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
    </ScrollView>
  )
}

export default Trial;