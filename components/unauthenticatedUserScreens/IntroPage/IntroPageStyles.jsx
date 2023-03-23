import React from "react";
import { StyleSheet } from "react-native";

import { spacing, responsivePixels } from "../../../globalStyles";

export const styles = StyleSheet.create({
  innerContainer: {
    marginTop: responsivePixels(125)
  },
  largeHeading: {
    paddingBottom: spacing.small
  }
})