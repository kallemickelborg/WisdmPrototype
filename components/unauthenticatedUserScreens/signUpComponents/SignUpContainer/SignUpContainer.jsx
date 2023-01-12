import React from 'react';
import { View, Text, Button } from 'react-native'

const SignUpContainer = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Sign Up Container</Text>
      <Button title="Go to Sign In" onPress={() => navigation.navigate('SignIn')}/>
    </View>
  )
}

export default SignUpContainer;