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
import { colors, spacing } from "../../../globalStyles";

const Tab = createBottomTabNavigator();

const AuthenticatedNavigation = () => {
  const makeTabSelectors = (isFocused, name, icon) => {
    return (
      <View
      style={[
        styles.tabWrapper,
        {
          backgroundColor: isFocused ? colors.primary : colors.quaternary,
        },
      ]}
    >
      <Text
        style={[styles.tabText, { color: isFocused ? colors.quaternary : colors.primary }]}
      >
        <Ionicons name={icon} size={spacing.large} style={[
            {
              tintColor: isFocused ? colors.quaternary : colors.primary,
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
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          zIndex: 1,
          position: "absolute",
          // bottom: -80,
          bottom: spacing.large,
          left: spacing.large,
          right: spacing.large,
          tabBarElevation: 0,
          backgroundColor: colors.quaternary,
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