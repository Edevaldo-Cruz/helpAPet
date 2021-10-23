import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 96,
    marginHorizontal: 26,
    marginBottom: 112,
  },
  containertitle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  icons: {
    justifyContent: "flex-start",
    flexGrow: 1,
  },
  containerTitle: {
    justifyContent: "center",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F7BF29",
  },
  containerList: {
    marginTop: 56,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 34,
  },
  image: {
    width: 25,
    height: 18,
    flexGrow: 0,
  },
  containerText: {
    flexGrow: 1,
    paddingLeft: 20,
  },
  text: {
    fontSize: 21,
    color: "#999999",
  },
  icon: {
    flexGrow: 0,
  },
});
