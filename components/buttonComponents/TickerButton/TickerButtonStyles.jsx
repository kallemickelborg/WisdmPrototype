import { StyleSheet } from "react-native";
import { radius, spacing, responsivePixels } from "../../../globalStyles";

export const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: spacing.small, 
    marginBottom: spacing.small, 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    paddingStart: responsivePixels(10), 
    paddingEnd: responsivePixels(10), 
    paddingTop: responsivePixels(5), 
    paddingBottom: responsivePixels(5) 
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: responsivePixels(150)
  },
  imageWrapper: {
    backgroundColor: '#EAEBF1',
    borderRadius: radius.extraSmall,
    padding: responsivePixels(5),
    height: '100%',
  },
  image: {
    height: responsivePixels(30),
    width: responsivePixels(30),
  },
  titlesWrapper: {
    marginLeft: responsivePixels(8),
  },
  title: {
    fontSize: responsivePixels(18),
  },
  subtitle: {
    marginTop: responsivePixels(4),
    fontSize: responsivePixels(18),
    // color: "#A9ABB1",
  },
  rightWrapper: {
    alignItems: "flex-end",
    width: responsivePixels(150)
  },
});