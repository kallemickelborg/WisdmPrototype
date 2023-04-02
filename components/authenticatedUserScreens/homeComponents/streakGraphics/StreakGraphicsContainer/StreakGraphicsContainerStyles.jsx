import { StyleSheet } from "react-native";
import { responsivePixels } from "../../../../../globalStyles";

export const styles = StyleSheet.create({
  streakContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    maxHeight: responsivePixels(120),
  }
});