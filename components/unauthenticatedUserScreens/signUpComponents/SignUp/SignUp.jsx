import React from 'react';
import { Text } from 'react-native';

import CustomButton from '../../../buttonComponents/CustomButton/CustomButton';
import MediumHeadings from '../../../textComponents/MediumHeadings/MediumHeadings';
import SmallHeadings from '../../../textComponents/SmallHeadings/SmallHeadings';
import SubHeadings from '../../../textComponents/SubHeadings/SubHeadings';

import { styles } from './SignUpStyles';

const SignUp = ({ setProgress }) => {
  return (
    <>
      <MediumHeadings style={{ textAlign: 'center' }}>
        {`Create an account.`}
      </MediumHeadings>
      <Text style={{ textAlign: 'center' }}>
        <SubHeadings>{`Already have an account? `}</SubHeadings>
        <SmallHeadings>{`Sign In`}</SmallHeadings>
      </Text>
      <CustomButton 
        onPress={() => setProgress(true)}
        style={[ styles.signUpButton ]}
      >
        <SmallHeadings style={[ styles.signUpButtonText ]}>{`Sign Up`}</SmallHeadings>
      </CustomButton>
    </>
  )
}

export default SignUp;