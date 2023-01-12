import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapperContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemWrapper: {
    marginTop: 24,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 15,
    width: Dimensions.get("window").width - 32,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textWrapper: {
    padding: 18,
    flexDirection: "column",
  },
  sourceWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sentimentWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    height: 150,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "PoppinsBold",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#000",
  },
  detail: {
    fontSize: 14,
    color: "#FF6600",
  },
  huge: {
    fontSize: 50,
    color: "#FF6600",
  },
});