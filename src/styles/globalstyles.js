import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 6,
    fontSize: 18,
    borderRadius: 6,
    color: "rgb(10,207,132)",
    marginVertical: 5,
    width: "90%",
  },
  text: {
    fontSize: 17,
    color: "black",
  },
  naira: {
    color: "green",
    fontWeight: "900",
    fontSize: 23,
  },
  amountContainer: {
    borderWidth: 2,
    borderColor: "rgb(10,207,132)",
    width: 150,
    height: 100,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  amount: {
    fontWeight: "900",
    color: "black",
    fontSize: 23,
  },
  itemContainer: {
    width: 300,
    height: 50,
    alignSelf: "center",
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "white",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 9,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
