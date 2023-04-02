import { StyleSheet } from "react-native";
import { colors, spacing, dimensions } from "../../../globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: dimensions.windowHeight * 0.09,
    paddingBottom: spacing.large,
    paddingHorizontal: spacing.large,
    position: 'relative'
  }
})