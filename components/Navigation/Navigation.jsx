import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from '@expo/vector-icons/Ionicons';

import Home from '../authenticatedUserScreens/homeComponents/Home/Home';
import Watchlist from "../authenticatedUserScreens/watchlistComponents/Watchlist/Watchlist";
import Explore from "../authenticatedUserScreens/exploreComponents/Explore/Explore";
import Profile from "../authenticatedUserScreens/profileComponents/Profile/Profile";
import { FlipInEasyX } from "react-native-reanimated";

import { styles } from "./NavigationStyles";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          zIndex: 1,
          position: "absolute",
          bottom: 25,
          left: 25,
          right: 25,
          tabBarElevation: 0,
          backgroundColor: "#000",
          borderRadius: 50,
          height: 70,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                // styles.tabWrapper,
                {
                  backgroundColor: focused ? "#FFF" : "#000",
                },
              ]}
            >
              <Text
                style={[styles.tabText, { color: focused ? "#000" : "#FFF" }]}
              >
                <Ionicons name="md-checkmark-circle" size={30} style={[
                    {
                      tintColor: focused ? "#000" : "#FFF",
                    },
                ]} />
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={Watchlist}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabWrapper,
                {
                  backgroundColor: focused ? "#FFF" : "#000",
                },
              ]}
            >
              <Image
                source={require("../../assets/icon.png")}
                resizeMode="contain"
                style={[
                  styles.tabImage,
                  {
                    tintColor: focused ? "#000" : "#FFF",
                  },
                ]}
              />
              <Text
                style={[styles.tabText, { color: focused ? "#000" : "#FFF" }]}
              >
                Watchlist
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabWrapper,
                {
                  backgroundColor: focused ? "#FFF" : "#000",
                },
              ]}
            >
              <Image
                source={require("../../assets/icon.png")}
                resizeMode="contain"
                style={[
                  styles.tabImage,
                  {
                    tintColor: focused ? "#000" : "#FFF",
                  },
                ]}
              />
              <Text
                style={[styles.tabText, { color: focused ? "#000" : "#FFF" }]}
              >
                Explore
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabWrapper,
                {
                  backgroundColor: focused ? "#FFF" : "#000",
                },
              ]}
            >
              <Image
                source={require("../../assets/icon.png")}
                resizeMode="contain"
                style={[
                  styles.tabImage,
                  {
                    tintColor: focused ? "#000" : "#FFF",
                  },
                ]}
              />
              <Text
                style={[styles.tabText, { color: focused ? "#000" : "#FFF" }]}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
