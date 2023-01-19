import { StyleSheet, Platform } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

import { fonts } from "../../../globalStyles";

export const styles = StyleSheet.create({
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
    width: 85,
    height: 50,
    top: Platform.OS === 'ios' ? 15 : 0,
    // top: 0,
    borderRadius: 25,
  },
  tabText: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 2,
    fontFamily: fonts.primary, // This is the font for Wisdm
  },
});