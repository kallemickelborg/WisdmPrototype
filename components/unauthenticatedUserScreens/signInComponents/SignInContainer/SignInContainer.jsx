import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../../../redux/reducers/userSlice';

const SignInContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const [tempVar, setTempVar] = useState('');
  return (
    <View>
      <Text>This is the Sign In Container</Text>
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')}/>
      <TextInput style={{ backgroundColor: 'white' }} value={tempVar} onChangeText={setTempVar}/>
      <Button title="log state" onPress={() => dispatch(setAuthToken(tempVar))}/>
    </View>
  )
}

export default SignInContainer;