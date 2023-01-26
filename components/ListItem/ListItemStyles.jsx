import { StyleSheet } from "react-native";
import { radius, spacing } from "../../globalStyles";

export const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: spacing.small, 
    marginBottom: spacing.small, 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    paddingStart: 10, 
    paddingEnd: 10, 
    paddingTop: 5, 
    paddingBottom: 5 
  },
  itemWrapper: {
    // paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageWrapper: {
    backgroundColor: '#EAEBF1',
    borderRadius: radius.extraSmall,
    padding: 5
  },
  image: {
    height: 20,
    width: 20,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginTop: 4,
    // fontSize: 14,
    color: "#A9ABB1",
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
});