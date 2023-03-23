import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { responsivePixels } from '../../../../globalStyles';

import Ionicons from '@expo/vector-icons/Ionicons';

import CustomButton from '../../../buttonComponents/CustomButton/CustomButton';

import { 
  MediumHeadings, ModalHeadings, SmallHeadings, SubHeadings, BodyOne, FinePrint
} from '../../../Text/Text';

import { styles } from './TrialStyles';
import { colorObject } from '../../../../redux/reducers/colorSlice';

const Trial = () => {
  const colors = useSelector(colorObject);

  const [ planType, setPlanType ] = useState('');

  const makeCheckmarkViews = (text) => {
    return (
      <View style={[ styles.checkmarkContainer ]}>
        <Ionicons name={'checkmark-circle'} size={responsivePixels(25)} style={[ styles.checkmark, { color: colors.graphPositive } ]}/>
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
      <CustomButton onPress={() => setPlanType('annual')} isSelected={ planType === 'annual' ? true : false } style={[ styles.trialButtons ]}>
        <View style={[ styles.bestValueWrapper, { backgroundColor: colors.quaternary } ]}>
          <FinePrint style={[ styles.bestValueText, { color: colors.primary } ]}>{`Best value`}</FinePrint>
        </View>
        <ModalHeadings style={[ styles.trialButtonHeader ]}>{`Annual`}</ModalHeadings>
        <BodyOne>{`$10/month after 14 day trial`}</BodyOne>
      </CustomButton>
      <CustomButton onPress={() => setPlanType('monthly')} isSelected={ planType === 'monthly' ? true : false } style={[ styles.trialButtons ]}>
        <ModalHeadings style={[ styles.trialButtonHeader ]}>{`Monthly`}</ModalHeadings>
        <BodyOne>{`$15/month after 7 day trial`}</BodyOne>
      </CustomButton>
      <CustomButton 
        style={[ styles.finePrintButton, { backgroundColor: colors.primary } ]}
        // onPress={}
      >
        <FinePrint >{`Restore Purchase - Terms & Conditions`}</FinePrint>
      </CustomButton>
      <CustomButton 
        // onPress={}
        style={[ styles.startTrialButton, { backgroundColor: colors.tertiary } ]}
      >
        <SmallHeadings style={[ { color: colors.primary } ]}>{`Start your 7-day free trial`}</SmallHeadings>
      </CustomButton>
    </ScrollView>
  )
}

export default Trial;