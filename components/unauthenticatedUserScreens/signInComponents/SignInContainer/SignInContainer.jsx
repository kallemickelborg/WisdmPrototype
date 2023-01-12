import React from 'react';
import { View, Text, Button } from 'react-native'

const SignInContainer = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Sign In Container</Text>
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')}/>
    </View>
  )
}

export default SignInContainer;