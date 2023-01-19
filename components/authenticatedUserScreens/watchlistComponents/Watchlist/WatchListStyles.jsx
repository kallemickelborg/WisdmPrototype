import { StyleSheet} from "react-native";
import { colors } from "../../../../globalStyles";

export const styles = StyleSheet.create({
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleWrapper: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  divider: {
    backgroundColor: "lightgray",
    marginHorizontal: 16,
    marginTop: 16,
    height: 1,
  },
  contentContainer: {
    padding: 16,
  },
  bottomSheet: {
    shadowColor: colors.quaternary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});