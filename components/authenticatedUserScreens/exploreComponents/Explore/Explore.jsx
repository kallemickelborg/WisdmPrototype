import * as React from 'react';
import { View, Text, Button } from 'react-native';

import MainContainer from '../../../containers/MainContainer/MainContainer';

export default function Explore ({navigation}) {
  return (
    <MainContainer>
        <Text>This is the Explore Screen.</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </MainContainer>
  );
}