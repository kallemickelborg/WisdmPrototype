import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IntroPage from "../../unauthenticatedUserScreens/IntroPage/IntroPage";
import SignUpContainer from "../../unauthenticatedUserScreens/signUpComponents/SignUpContainer/SignUpContainer";
import SignInContainer from "../../unauthenticatedUserScreens/signInComponents/SignInContainer/SignInContainer";

const Tab = createBottomTabNavigator();

const UnauthenticatedNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: 'none'
        },
      }}
    >
      <Tab.Screen
        name="SignInSignUp"
        component={IntroPage}
        options={{
          title: 'Sign In/Sign Up',
          headerTitleAlign: 'center'
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUpContainer}
        options={{
          title: 'Sign Up',
          headerTitleAlign: 'center'
        }}
      />
      <Tab.Screen
        name="SignIn"
        component={SignInContainer}
        options={{
          title: 'Sign In',
          headerTitleAlign: 'center'
        }}
      />
    </Tab.Navigator>
  );
};

export default UnauthenticatedNavigation;