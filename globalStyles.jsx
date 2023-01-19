import { StyleSheet, Platform } from "react-native";

export const colors = {
  primary: '#FFFFFF',
  secondary: '#A1D5FF',
  tertiary: '#5AB5FF',
  quaternary: '#000000',
  // graphPositive: '#2E8A02',
  graphPositive: '#01BF54',
  // graphNegative: '#CA0000',
  graphNegative: '#FF0000'
};

export const spacing = {
  large: 25,
  small: 14
}

export const fonts = {
  primary: 'PoppinsBold',
  secondary: Platform.OS === 'android' ? 'sans-serif' : 'Damascus',
};

export const radius = {
  extraSmall: 5,
  small: 8,
  medium: 10,
  large: 16,
  extraLarge: 25
}


export const fontSizes = StyleSheet.create({
  largeNumbers: {
    fontFamily: fonts.primary,
    fontWeight: 'bold',
    fontSize: 80
  },
  largeHeadings: {
    fontFamily: fonts.primary,
    fontWeight: 'bold',
    fontSize: 41
  },
  mediumHeadings: {
    fontFamily: fonts.primary,
    fontWeight: 'bold',
    fontSize: 27
  },
  modalHeadings: {
    fontFamily: fonts.primary,
    fontWeight: 'bold',
    fontSize: 24
  },
  smallHeadings: {
    fontFamily: fonts.primary,
    fontWeight: 'bold',
    fontSize: 16
  },
  subHeadings: {
    fontFamily: fonts.secondary,
    fontWeight: 'regular',
    fontSize: 16
  },
  bodyOne: {
    fontFamily: fonts.secondary,
    fontWeight: 'light',
    fontSize: 20
  },
  bodyTwo: {
    fontFamily: fonts.secondary,
    fontWeight: 'light',
    fontSize: 16
  },
  bodyThree: {
    fontFamily: fonts.secondary,
    fontWeight: 'light',
    fontSize: 12
  },
  finePrint: {
    fontFamily: fonts.secondary,
    fontWeight: 'light',
    fontSize: 9
  },
})

export const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});