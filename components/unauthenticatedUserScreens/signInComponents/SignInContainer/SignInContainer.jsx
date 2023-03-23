import React, { useState } from 'react';
import { Text, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../../../redux/reducers/userSlice';

import MainContainer from '../../../containers/MainContainer/MainContainer';
import SignUpSignIn from '../../SignUpSignIn/SignUpSignIn';

const SignInContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const [tempVar, setTempVar] = useState('');
  return (
    <MainContainer>
      <SignUpSignIn
        setProgress={(email, password) => dispatch(setAuthToken(email, password))}
        componentTitle={`Sign In`}
        componentMessage={`Don't have an account yet? `}
        componentMessageButton={`Sign up now!`}
        navigateToFunction={() => navigation.navigate('SignUp')}  
      />
      {/* <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')}/>
      <TextInput style={{ backgroundColor: 'white' }} value={tempVar} onChangeText={setTempVar}/>
      <Button title="log state" onPress={() => dispatch(setAuthToken(tempVar))}/> */}
    </MainContainer>
  )
}

export default SignInContainer;