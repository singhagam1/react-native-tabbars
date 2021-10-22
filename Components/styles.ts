import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  topMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: (height / 100) * 8,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: (height / 100) * 1,
  },
  title: {
    color: "#000",
    fontSize: (height / 100) * 2.2,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  child: {
    width: width,
    height: (height / 100) * 92,
  },
});
