import { StyleSheet } from "react-native";

import { spacing, responsivePixels, radius } from "../../../../../globalStyles";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    width: responsivePixels(75),
    height: '100%',
    marginHorizontal: spacing.small * 0.5,
    borderRadius: radius.extraLarge + radius.medium,
    borderWidth: 1
  },
  date: {
    marginBottom: spacing.small
  }
});