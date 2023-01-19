import { StyleSheet } from "react-native";

import { colors } from "../../../globalStyles";

export const styles = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topButton: {
    backgroundColor: colors.quaternary,
  },
  bottomButton: {
    backgroundColor: colors.primary,
  },
  text: {
    textAlign: 'center'
  },
  topButtonText: {
    color: colors.primary,
  },
  bottomButtonText: {
    color: colors.quaternary,
  }
});