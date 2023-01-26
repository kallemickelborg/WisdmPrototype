import { StyleSheet, Platform } from "react-native";

import { spacing, colors, radius, fonts, responsivePixels } from "../../../../globalStyles";

const ios = Platform.OS === 'ios' ? true : false;

export const styles = StyleSheet.create({
  heading: {
    marginBottom: spacing.small, 
    marginTop: responsivePixels(40),
  },
  trialSubHeading: {
    marginBottom: spacing.large
  },
  checkmarkContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 2
  },
  checkmark: {
    color: colors.graphPositive, 
    marginRight: spacing.small
  },
  planSubHeading: {
    marginTop: spacing.large,
    marginBottom: spacing.small, 
    fontFamily: 'PoppinsBold'
  },
  trialButtons: {
    flexDirection: 'column', 
    alignItems: ios ? 'start' : undefined, 
    paddingHorizontal: spacing.large, 
    borderRadius: radius.extraLarge,
    position: 'relative',
    marginBottom: spacing.large
  },
  trialButtonHeader: {
    marginBottom: spacing.large
  },
  bestValueWrapper: {
    position: 'absolute',
    backgroundColor: colors.quaternary,
    paddingHorizontal: spacing.large,
    paddingVertical: 5,
    top: 10,
    right: spacing.small,
    borderRadius: radius.small,
  },
  bestValueText: {
    color: colors.primary,
    fontFamily: fonts.primary
  },
  finePrintButton: {
    paddingTop: 0,
    backgroundColor: colors.primary
  },
  startTrialButton: {
    borderRadius: radius.large,
    backgroundColor: colors.tertiary,
    marginTop: spacing.large
  },
  startTrialButtonText: {
    color: colors.primary
  }
})