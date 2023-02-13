import { StyleSheet } from "react-native";

import { radius } from "../../../globalStyles";

export const styles = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: radius.large
  },
  text: {
    textAlign: 'center'
  },
});