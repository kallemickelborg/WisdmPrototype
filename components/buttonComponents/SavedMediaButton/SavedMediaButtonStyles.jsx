import { StyleSheet } from "react-native";
import { radius, responsivePixels, spacing } from "../../../globalStyles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: radius.medium,
  },
  innerContainer: {
    width: responsivePixels(200),
    height: "85%",
    marginRight: 20,
    flexShrink: 1,
  },
  image: {
    width: responsivePixels(120),
    height: "100%",
    borderRadius: 16,
  },
  flexInfo: { flexShrink: 1, paddingLeft: responsivePixels(16) },
  header: { marginBottom: spacing.medium },
  infoDetails: { flexDirection: "row", alignItems: "center" },
  publish: { marginHorizontal: responsivePixels(16) },
});
