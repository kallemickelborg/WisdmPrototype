import React, {useState} from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

import CustomButton from '../../buttonComponents/CustomButton/CustomButton';

import Ionicons from '@expo/vector-icons/Ionicons';

import { responsivePixels } from '../../../globalStyles';

import { MediumHeadings, ModalHeadings, SmallHeadings, SubHeadings } from '../../Text/Text';

import { styles } from './SignUpSignInStyles';
import { colorObject } from '../../../redux/reducers/colorSlice';

import { makeTitleIntoKey } from '../../../functions/manipulateStrings'

const SignUpSignIn = ({ 
  setProgress,
  componentTitle,
  componentMessage,
  componentMessageButton,
  navigateToFunction,
  appleSignUpSignInFunction,
  googleSignUpSignInFunction,
  facebookSignUpSignInFunction,
  isConfirmPassword = false
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const buttonArray = [
    {name: 'Apple', icon: 'logo-apple', function: appleSignUpSignInFunction},
    {name: 'Google', icon: 'logo-google', function: googleSignUpSignInFunction},
    {name: 'Facebook', icon: 'logo-facebook', function: facebookSignUpSignInFunction},
  ];
  const colors = useSelector(colorObject);
  const signUpSignInFunction = (email, password) => {
    setProgress(password);
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <MediumHeadings style={[ styles.centerText ]}>
        {componentTitle}
      </MediumHeadings>
      <Text onPress={navigateToFunction} style={[ styles.centerText, styles.headerContainer ]}>
        <SubHeadings>{`${componentMessage} `}</SubHeadings>
        <SmallHeadings>{componentMessageButton}</SmallHeadings>
      </Text>
      <SubHeadings>{`Your Email`}</SubHeadings>
      <TextInput editable={true} keyboardType='default' onChangeText={(newText) => setEmail(newText)} defaultValue={email} style={[ styles.textInput, { borderColor: colors.tertiary } ]}></TextInput>
      <SubHeadings>{`Password`}</SubHeadings>
      <TextInput editable={true} keyboardType='default' onChangeText={(newText) => setPassword(newText)} defaultValue={password} style={[ styles.textInput, { borderColor: colors.tertiary } ]}></TextInput>
      {
        password.length && isConfirmPassword ?
        <>
          <SubHeadings>{`Confirm Password`}</SubHeadings>
          <TextInput editable={true} keyboardType='default' onChangeText={(newText) => setConfirmPassword(newText)} defaultValue={confirmPassword} style={[ styles.textInput, { borderColor: colors.tertiary } ]}></TextInput>
        </> :
        null
      }
      <CustomButton 
        onPress={() => signUpSignInFunction(email, password)}
        style={[ styles.signUpButton, , { backgroundColor: colors.quaternary } ]}
      >
        <SmallHeadings style={[ { color: colors.primary } ]}>{componentTitle}</SmallHeadings>
      </CustomButton>
      <View style={[ styles.orContainer ]}>
        <View style={[ styles.line, styles.lineLeft, { backgroundColor: colors.textSecondary } ]}></View>
        <SubHeadings>{`Or continue with`}</SubHeadings>
        <View style={[ styles.line, styles.lineRight, { backgroundColor: colors.textSecondary } ]}></View>
      </View>
      <View style={[ styles.alternativeSignUpContainer ]}>
        {
          buttonArray.map((item) => (
            <CustomButton key={makeTitleIntoKey(item.name)} style={[ styles.alternativeSignUpButtons ]}>
              <View onPress={() => item.function()} style={[ styles.ioniconContainer ]}>
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

export default SignUpSignIn;
// import React, {useState} from 'react';
// import { ScrollView, View, Text, TextInput } from 'react-native';
// import { useSelector } from 'react-redux';

// import CustomButton from '../../buttonComponents/CustomButton/CustomButton';

// import Ionicons from '@expo/vector-icons/Ionicons';

// import { responsivePixels } from '../../../globalStyles';

// import { MediumHeadings, ModalHeadings, SmallHeadings, SubHeadings } from '../../Text/Text';

// import { styles } from './SignUpSignInStyles';
// import { colorObject } from '../../../redux/reducers/colorSlice';

// import { makeTitleIntoKey } from '../../../functions/manipulateStrings'

// const SignUpSignIn = ({ 
//   setProgress,
//   componentTitle,
//   componentMessage,
//   componentMessageButton,
//   navigateToFunction,
//   appleSignUpSignInFunction,
//   googleSignUpSignInFunction,
//   facebookSignUpSignInFunction,
//   isConfirmPassword = false
// }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const buttonArray = [
//     {name: 'Apple', icon: 'logo-apple', function: appleSignUpSignInFunction},
//     {name: 'Google', icon: 'logo-google', function: googleSignUpSignInFunction},
//     {name: 'Facebook', icon: 'logo-facebook', function: facebookSignUpSignInFunction},
//   ];
//   const colors = useSelector(colorObject);
//   const signUpSignInFunction = (email, password) => {
//     setProgress(password);
//   }
//   return (
//     <ScrollView>
//       <MediumHeadings style={[ styles.centerText ]}>
//         {componentTitle}
//       </MediumHeadings>
//       <Text onPress={navigateToFunction} style={[ styles.centerText, styles.headerContainer ]}>
//         <SubHeadings>{`${componentMessage} `}</SubHeadings>
//         <SmallHeadings>{componentMessageButton}</SmallHeadings>
//       </Text>
//       <SubHeadings>{`Your Email`}</SubHeadings>
//       <TextInput editable={true} keyboardType='default' onChangeText={(newText) => setEmail(newText)} defaultValue={email} style={[ styles.textInput, { borderColor: colors.tertiary } ]}></TextInput>
//       <SubHeadings>{`Password`}</SubHeadings>
//       <TextInput onChangeText={(newText) => setPassword(newText)} defaultValue={password} style={[ styles.textInput, { borderColor: colors.tertiary } ]}></TextInput>
//       {
//         password.length && isConfirmPassword ?
//         <>
//           <SubHeadings>{`Confirm Password`}</SubHeadings>
//           <TextInput onChangeText={(newText) => setConfirmPassword(newText)} defaultValue={confirmPassword} style={[ styles.textInput, { borderColor: colors.tertiary } ]}></TextInput>
//         </> :
//         null
//       }
//       <CustomButton 
//         onPress={() => signUpSignInFunction(email, password)}
//         style={[ styles.signUpButton, , { backgroundColor: colors.quaternary } ]}
//       >
//         <SmallHeadings style={[ { color: colors.primary } ]}>{componentTitle}</SmallHeadings>
//       </CustomButton>
//       <View style={[ styles.orContainer ]}>
//         <View style={[ styles.line, styles.lineLeft, { backgroundColor: colors.textSecondary } ]}></View>
//         <SubHeadings>{`Or continue with`}</SubHeadings>
//         <View style={[ styles.line, styles.lineRight, { backgroundColor: colors.textSecondary } ]}></View>
//       </View>
//       <View style={[ styles.alternativeSignUpContainer ]}>
//         {
//           buttonArray.map((item) => (
//             <CustomButton key={makeTitleIntoKey(item.name)} style={[ styles.alternativeSignUpButtons ]}>
//               <View onPress={() => item.function()} style={[ styles.ioniconContainer ]}>
//                 <Ionicons name={item.icon} size={responsivePixels(40)} style={[ styles.ionicon ]}/>
//                 <ModalHeadings>{item.name}</ModalHeadings>
//               </View>
//             </CustomButton>
//           ))
//         }
//       </View>
//     </ScrollView>
//   )
// }

// export default SignUpSignIn;