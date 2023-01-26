import React from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';

import CustomButton from '../../../buttonComponents/CustomButton/CustomButton';

import Ionicons from '@expo/vector-icons/Ionicons';

import { responsivePixels } from '../../../../globalStyles';

import { MediumHeadings, ModalHeadings, SmallHeadings, SubHeadings } from '../../../Text/Text';

import { styles } from './SignUpStyles';

import { makeTitleIntoKey } from '../../../../functions/manipulateStrings'

const SignUp = ({ setProgress }) => {
  const buttonArray = [
    {name: 'Apple', icon: 'logo-apple', function: ''},
    {name: 'Google', icon: 'logo-google', function: ''},
    {name: 'Facebook', icon: 'logo-facebook', function: ''},
  ];
  return (
    <ScrollView>
      <MediumHeadings style={[ styles.centerText ]}>
        {`Create an account.`}
      </MediumHeadings>
      <Text style={[ styles.centerText, styles.headerContainer ]}>
        <SubHeadings>{`Already have an account? `}</SubHeadings>
        <SmallHeadings>{`Sign In`}</SmallHeadings>
      </Text>
      <SubHeadings>{`Your Email`}</SubHeadings>
      <TextInput style={[ styles.textInput ]}></TextInput>
      <SubHeadings>{`Password`}</SubHeadings>
      <TextInput style={[ styles.textInput ]}></TextInput>
      <CustomButton 
        onPress={() => setProgress(true)}
        style={[ styles.signUpButton ]}
      >
        <SmallHeadings style={[ styles.signUpButtonText ]}>{`Sign Up`}</SmallHeadings>
      </CustomButton>
      <View style={[ styles.orContainer ]}>
        <View style={[ styles.line, styles.lineLeft ]}></View>
        <SubHeadings>Or</SubHeadings>
        <View style={[ styles.line, styles.lineRight ]}></View>
      </View>
      <View style={[ styles.alternativeSignUpContainer ]}>
        {
          buttonArray.map((item) => (
            <CustomButton key={makeTitleIntoKey(item.name)} style={[ styles.alternativeSignUpButtons ]}>
              <View style={[ styles.ioniconContainer ]}>
                <Ionicons name={item.icon} size={responsivePixels(40)} style={[ styles.ionicon ]}/>
                <ModalHeadings>{item.name}</ModalHeadings>
              </View>
            </CustomButton>
          ))
        }
      </View>
    </ScrollView>
  )
}

export default SignUp;