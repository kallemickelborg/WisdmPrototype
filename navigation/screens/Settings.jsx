import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Settings ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the Settings Screen.</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}