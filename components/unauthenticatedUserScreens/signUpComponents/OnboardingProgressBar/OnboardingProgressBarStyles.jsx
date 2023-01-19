import { StyleSheet } from "react-native";

import { colors, radius, spacing } from "../../../../globalStyles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.large
  },
  barSegment: {
    height: 8,
    width: '17%',
    backgroundColor: colors.secondary,
    borderRadius: radius.small
  }
});