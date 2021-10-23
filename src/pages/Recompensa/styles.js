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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#979797",
    opacity: 0.8,
  },
  modalView: {
    width: 412,
    height: 364,
    marginTop: 471,
    margin: 20,
    backgroundColor: "#FFF",
    opacity: 1,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#606060",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
