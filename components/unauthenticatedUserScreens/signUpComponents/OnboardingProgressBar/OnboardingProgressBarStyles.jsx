import { StyleSheet } from "react-native";

import { colors, radius, spacing, responsivePixels } from "../../../../globalStyles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.large
  },
  barSegment: {
    height: responsivePixels(8),
    width: '17%',
    backgroundColor: colors.secondary,
    borderRadius: radius.small
  }
});