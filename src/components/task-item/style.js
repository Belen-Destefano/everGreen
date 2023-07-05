import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 15,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#ECF39E",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  listItem: {
    fontSize: 15,
    // fontWeight: 'bold'
  },
});
