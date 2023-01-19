import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { styles as globalStyles } from '../../../../globalStyles'

export default function Explore ({navigation}) {
  return (
    <View style={globalStyles.screenContainer}>
        <Text>This is the Explore Screen.</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}