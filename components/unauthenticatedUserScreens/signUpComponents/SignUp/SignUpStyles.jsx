import { StyleSheet, Platform } from "react-native";

import { colors, radius, spacing, fontSizes, responsivePixels } from "../../../../globalStyles";

const ios = Platform.OS === 'ios' ? true : false;

export const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center'
  },
  headerContainer: {
    marginBottom: spacing.small
  },
  textInput: {
    borderWidth: 1, 
    borderColor: colors.tertiary, 
    borderRadius: radius.large,
    paddingVertical: spacing.small, 
    width: '100%',  
    paddingHorizontal: spacing.large,
    marginBottom: spacing.small,
    marginTop: 5,
    ...fontSizes.bodyOne
  },
  signUpButton: {
    marginTop: spacing.small,
    marginBottom: spacing.large,
    borderRadius: radius.large,
    backgroundColor: colors.quaternary
  },
  signUpButtonText: {
    color: colors.primary
  },
  orContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.large,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.textSecondary
  },
  lineLeft: {
    marginEnd: 10
  },
  lineRight: {
    marginStart: 10
  },
  alternativeSignUpContainer: {
    marginTop: spacing.large
  },
  alternativeSignUpContainer: {
    marginTop: spacing.large
  },
  alternativeSignUpButtons: {
    borderRadius: radius.large,
    marginBottom: spacing.large
  },
  ioniconContainer: {
    width: responsivePixels(175),
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: ios ? 'start' : undefined,
    alignItems: 'center'
  },
  ionicon: {
    marginEnd: spacing.small
  }
})