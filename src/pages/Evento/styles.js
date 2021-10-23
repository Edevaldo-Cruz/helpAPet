import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 112,
  },
  img: {
    width: 412,
    height: 356,
  },
  calendario: {
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 17,
    marginTop: -40,
  },
  mes: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F7BF29",
  },
  dia: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#534E47",
  },
  icons: {
    alignItems: "flex-end",
    marginTop: -315,
    marginBottom: 270,
  },
  main: {
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 29,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#5F5D58",
  },
  containerSubTitle: {
    flexDirection: "row",
  },
  locationText: {
    fontSize: 19,
    color: "#FE9E0C",
    marginRight: 11,
    fontWeight: "bold",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#7E7E7E",
    marginTop: 18,
  },
  btnInteresse: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 246,
    height: 52,
    borderRadius: 17,
    backgroundColor: "#FFC225",
    marginTop: 44,
  },
  btnText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFF",
    marginLeft: 16,
  },
  btnShare: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 194,
    height: 51,
    borderRadius: 17,
    backgroundColor: "#FE9E0C",
    marginTop: 10,
  },
  btnCoinsText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFF",
    marginLeft: 16,
  },
});
