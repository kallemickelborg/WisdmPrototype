import { StyleSheet } from "react-native";

import { spacing, colors } from "../../../../globalStyles";

export const styles = StyleSheet.create({
  heading: {
    marginBottom: spacing.small, 
    marginTop: 50
  },
  trialSubHeading: {
    marginBottom: spacing.large
  },
  planSubHeading: {
    marginTop: spacing.large, 
    fontFamily: 'PoppinsBold'
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
  finePrintButton: {
    paddingTop: 0
  },
  startTrialButton: {
    backgroundColor: colors.tertiary,
    marginTop: spacing.large
  },
  startTrialButtonText: {
    color: colors.primary
  }
})