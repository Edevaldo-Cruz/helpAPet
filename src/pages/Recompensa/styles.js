import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 26,
  },
  title: {
    fontSize: 35,
    color: "#F7BF29",
    fontWeight: "bold",
    marginBottom: 42,
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 4,
  },
  star: {
    width: 25,
    height: 26,
    marginTop: 8,
    marginLeft: 50,
  },
  number: {
    fontSize: 30,
    color: "#FE720C",
    fontWeight: "bold",
  },
  itens: {
    backgroundColor: "#FFF",
    borderColor: "#606060",
    borderWidth: 0.2,
    borderRadius: 12,
    width: 360,
    height: 80,
    marginBottom: 14,
  },
  containerBold: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginTop: 8,
  },
  textBold: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#606060",
  },
  textNumber: {
    marginRight: 5,
    fontSize: 24,
    fontWeight: "bold",
    color: "#606060",
  },
  containerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginBottom: 13,
  },
  text: {
    fontSize: 14,
    color: "#979797",
  },
  textPts: {
    fontSize: 19,
    color: "#979797",
    fontWeight: "bold",
  },
});
