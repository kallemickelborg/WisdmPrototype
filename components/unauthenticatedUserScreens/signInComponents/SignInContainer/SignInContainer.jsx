import React, { useState } from 'react';
import { Text, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../../../redux/reducers/userSlice';

import MainContainer from '../../../containers/MainContainer/MainContainer';

const SignInContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const [tempVar, setTempVar] = useState('');
  return (
    <MainContainer>
      <Text>This is the Sign In Container</Text>
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')}/>
      <TextInput style={{ backgroundColor: 'white' }} value={tempVar} onChangeText={setTempVar}/>
      <Button title="log state" onPress={() => dispatch(setAuthToken(tempVar))}/>
    </MainContainer>
  )
}

export default SignInContainer;