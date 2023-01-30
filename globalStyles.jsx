import { StyleSheet, Platform, Dimensions } from "react-native";

export const dimensions = {
  windowHeight: Dimensions.get('window').height,
  windowWidth: Dimensions.get('window').width,
  viewportHeightUnit: function() { return this.windowHeight * 0.01 },
  viewportWidthUnit: function() { return this.windowWidth * 0.01 },
  viewportTotalUnit: function() { return (this.windowWidth + this.windowHeight) * 0.01 },
  remUnit: (pixel) => pixel / 16,
}

export const responsivePixels = (pixel) => dimensions.viewportTotalUnit() * dimensions.remUnit(pixel);

export const colors = {
  primary: '#FFFFFF',
  secondary: '#E7F5FF',
  tertiary: '#5AB5FF',
  quaternary: '#000000',
  graphPositive: '#01BF54',
  graphNegative: '#FF0000',
  buttonPrimary: '#F8F8F8',
  textSecondary: '#A7A7A7',
};

export const spacing = {
  large: responsivePixels(25),
  small: responsivePixels(14),
}

export const fonts = {
  primary: 'PoppinsBold',
  secondary: Platform.OS === 'android' ? 'sans-serif' : 'Damascus',
};

export const radius = {
  extraSmall: responsivePixels(5),
  small: responsivePixels(8),
  medium: responsivePixels(10),
  large: responsivePixels(16),
  extraLarge: responsivePixels(25)
}


export const fontSizes = StyleSheet.create({
  largeNumbers: {
    fontFamily: fonts.primary,
    fontWeight: 'bold',
    fontSize: responsivePixels(85),
  },
  largeHeadings: {
    fontFamily: fonts.primary,
    fontWeight: 'bold',
    fontSize: responsivePixels(46),
  },
  mediumHeadings: {
    fontFamily: fonts.primary,
    fontWeight: 'bold',
    fontSize: responsivePixels(32),
  },
  modalHeadings: {
    fontFamily: fonts.primary,
    fontWeight: 'bold',
    fontSize: responsivePixels(29),
  },
  smallHeadings: {
    fontFamily: fonts.primary,
    fontWeight: 'bold',
    fontSize: responsivePixels(21),
  },
  subHeadings: {
    fontFamily: fonts.secondary,
    fontWeight: 'regular',
    fontSize: responsivePixels(21),
  },
  bodyOne: {
    fontFamily: fonts.secondary,
    fontWeight: 'light',
    fontSize: responsivePixels(25),
  },
  bodyTwo: {
    fontFamily: fonts.secondary,
    fontWeight: 'light',
    fontSize: responsivePixels(21),
  },
  bodyThree: {
    fontFamily: fonts.secondary,
    fontWeight: 'light',
    fontSize: responsivePixels(17),
  },
  finePrint: {
    fontFamily: fonts.secondary,
    fontWeight: 'light',
    fontSize: responsivePixels(14),
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