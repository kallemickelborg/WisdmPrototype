import { StyleSheet } from "react-native";

import { radius, spacing, colors } from "../../../../../globalStyles";

export const styles = StyleSheet.create({
  button: {
    borderRadius: radius.small,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacing.small,
    paddingBottom: spacing.small,
    width: '100%',
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: colors.buttonPrimary,
    flexDirection: 'row', 
    flexWrap: 'nowrap'
  },
  selectedButton: {
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.tertiary
  }
});