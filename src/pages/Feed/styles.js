import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 26,
    marginBottom: 112,
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
    marginBottom: 8,
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
  containerLink: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 8,
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
    alignItems: "center",
  },
  bob: {
    marginRight: 17,
  },
  evento: {
    width: 355,
    height: 200,
    marginTop: 19,
    marginBottom: 19,
    alignItems: "center",
  },
  doacao: {
    marginRight: 32,
    paddingTop: 18,
    paddingLeft: 13,
    backgroundColor: "#FE720C",
    width: 155,
    height: 165,
    borderRadius: 20,
  },

  text: {
    marginTop: 14,
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
