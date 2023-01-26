import React from 'react';

import MainContainer from '../../containers/MainContainer/MainContainer';
import InnerContainer from '../../containers/InnerContainer/InnerContainer';
import NavigationButtons from '../NavigationButtons/NavigationButtons';

import { LargeHeadings, SubHeadings } from '../../Text/Text';

import { spacing, responsivePixels } from '../../../globalStyles';

const SignInSignUp = ({ navigation }) => {
  return (
    <MainContainer>
      <InnerContainer style={{ marginTop: responsivePixels(125) }}>
        <LargeHeadings style={{paddingBottom: spacing.small}}>
          {`Investing \ndoesn't have \nto be hard.`}
        </LargeHeadings>
        <SubHeadings>
          {`All the stock market information \nyou need in one place, presented \nin bite-sized chunks.`}
        </SubHeadings>
      </InnerContainer>
      <NavigationButtons
        topButtonTitle="Get Started"
        bottomButtonTitle="Sign in"
        bottomButtonAdditionalTitle="Already have an account? "
        topButtonOnPress={() => navigation.navigate('SignUp')}
        bottomButtonOnPress={() => navigation.navigate('SignIn')}
      />
    </MainContainer>
  )
}

export default SignInSignUp;