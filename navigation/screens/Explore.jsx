import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Explore ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the Explore Screen.</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}