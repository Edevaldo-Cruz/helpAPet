import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 26,
  },
  title: {
    fontSize: 35,
    color: "#F7BF29",
    fontWeight: "bold",
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",
    marginBottom: 4,
  },
  coin: {
    width: 36,
    height: 36,
    marginTop: 8,
    marginLeft: 175,
  },
  number: {
    fontSize: 30,
    color: "#F7BF29",
    fontWeight: "bold",
  },
  line: {
    backgroundColor: "#F7BF29",
    width: 45,
    height: 2,
    marginTop: -15,
    marginBottom: 14,
    marginLeft: 15,
  },
  containerLink: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 4,
  },
  link: {
    alignItems: "center",
    fontSize: 18,
    color: "#F7BF29",
    fontWeight: "bold",
    textAlign: "center",
  },
  containerImage: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bob: {
    marginRight: 17,
  },
  evento: {
    width: 350,
    height: 193,
    marginLeft: 3,
    marginTop: 14,
    marginBottom: 14,
  },
  img: {
    width: 165,
    height: 175,
    borderRadius: 20,
  },
  doacao: {
    marginRight: 17,
    paddingTop: 18,
    paddingLeft: 13,
    backgroundColor: "#FE720C",
    width: 160,
    height: 170,
    borderRadius: 17,
  },

  text: {
    marginTop: 14,
    color: "#FFF",
    fontSize: 22,
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
    marginTop: 461,
    backgroundColor: "#FFF",
    borderRadius: 17,
    alignItems: "center",
    paddingHorizontal: 54,
  },

  buttonClose: {
    flexDirection: "row",
    width: 161,
    height: 52,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC225",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 8,
  },
  textModal: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#979797",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 26,
  },

  cancelar: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F7BF29",
    marginTop: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#606060",
    fontSize: 26,
    fontWeight: "bold",
  },
  lineModal: {
    width: 45,
    height: 5,
    backgroundColor: "#979797",
    marginTop: 9,
    marginBottom: 19,
    opacity: 0.3,
  },
});
