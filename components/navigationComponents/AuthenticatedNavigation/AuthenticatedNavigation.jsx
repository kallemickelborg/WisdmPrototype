import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from '@expo/vector-icons/Ionicons';

import Home from "../../authenticatedUserScreens/homeComponents/Home/Home";
import Watchlist from "../../authenticatedUserScreens/watchlistComponents/Watchlist/Watchlist";
import Explore from "../../authenticatedUserScreens/exploreComponents/Explore/Explore";
import Profile from "../../authenticatedUserScreens/profileComponents/Profile/Profile";
import { FlipInEasyX } from "react-native-reanimated";

import { styles } from "./AuthenticatedNavigationStyles";

const Tab = createBottomTabNavigator();

const AuthenticatedNavigation = () => {
  const makeTabSelectors = (isFocused, name, icon) => {
    return (
      <View
      style={[
        styles.tabWrapper,
        {
          backgroundColor: isFocused ? "#FFF" : "#000",
        },
      ]}
    >
      <Text
        style={[styles.tabText, { color: isFocused ? "#000" : "#FFF" }]}
      >
        <Ionicons name={icon} size={25} style={[
            {
              tintColor: isFocused ? "#000" : "#FFF",
            },  
        ]} />
        {`\n${name}`}
      </Text>
    </View>
    )
  };

  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          zIndex: 1,
          position: "absolute",
          bottom: -80,
          left: 25,
          right: 25,
          tabBarElevation: 0,
          backgroundColor: "#000",
          borderRadius: 50,
          height: 70,
          paddingEnd: 10,
          paddingStart: 10,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            makeTabSelectors(focused, 'Home', 'home-outline')
          ),
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={Watchlist}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            makeTabSelectors(focused, 'Watch', 'bar-chart-outline')
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            makeTabSelectors(focused, 'Explore', 'search-outline')
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            makeTabSelectors(focused, 'Profile', 'person-outline')
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticatedNavigation;