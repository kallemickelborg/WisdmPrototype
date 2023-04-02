import { StyleSheet } from "react-native";

import { responsivePixels, dimensions, spacing, radius } from "../../../globalStyles";

export const containerWidth = dimensions.windowWidth * 0.55
export const containerPadding = spacing.medium;
export const chartPadding = spacing.small;

export const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 0, 
    borderRadius: radius.extraLarge, 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: responsivePixels(215), 
    width: containerWidth, 
    padding: containerPadding,
  },
  textAndLogoWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%'
  },
  logoAndNameWrapper: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  logo: {
    width: responsivePixels(45), 
    height: responsivePixels(45)
  },
  textNameWrapper: {
    paddingStart: spacing.small
  },
  influencerScoreWrapper: {
    borderRadius: radius.small,
    borderWidth: 1,
    paddingHorizontal: responsivePixels(8),
    paddingVertical: responsivePixels(5)
  },
  priceWrapper: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'flex-end'
  },
  lineChartWrapper: {
    padding: chartPadding, 
    marginTop: spacing.large, 
    borderRadius: radius.large
  }
})