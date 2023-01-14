import React from "react";
import { Provider } from "react-redux";
import store from './redux/store'
import { useCallback } from 'react';
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from './components/navigationComponents/NavigationContainer/NavigationContainer'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { styles } from './AppStyles'

// SplashScreen.preventAutoHideAsync();

const App = () => {
  //Adds fonts to the app
  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('./assets/fonts/Poppins/PoppinsBold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;
