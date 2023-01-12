import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundcolor: "white",
    flex: 1,
  },
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});