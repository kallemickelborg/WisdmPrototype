import { StyleSheet } from "react-native";

import { radius, spacing } from "../../../globalStyles";

export const styles = StyleSheet.create({
  button: {
    borderRadius: radius.large,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacing.small,
    paddingBottom: spacing.small,
    width: '100%',
  }
});