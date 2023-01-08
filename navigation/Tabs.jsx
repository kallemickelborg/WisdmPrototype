import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import Watchlist from "./screens/Watchlist";
import Explore from "./screens/Explore";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

const Tabs = () => {
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
                styles.tabWrapper,
                {
                  backgroundColor: focused ? "#FFF" : "#000",
                },
              ]}
            >
              <Image
                source={require("/Users/mickelborg/Wisdm/assets/icon.png")}
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
                source={require("/Users/mickelborg/Wisdm/assets/icon.png")}
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
                source={require("/Users/mickelborg/Wisdm/assets/icon.png")}
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
                source={require("/Users/mickelborg/Wisdm/assets/icon.png")}
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    top: 15,
    padding: 15,
    borderRadius: 25,
  },
  tabImage: {
    width: 20,
    height: 20,
  },
  tabText: {
    fontSize: 12,
    marginTop: 2,
    fontFamily: "PoppinsBold", // This is the font for Wisdm
  },
});

export default Tabs;
