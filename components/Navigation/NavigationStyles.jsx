import { StyleSheet } from "react-native";


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