import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    marginHorizontal: 20,
    // paddingTop: 50,
    paddingTop: StatusBar.currentHeight + 10,
  },
  listContainer: {
    marginTop: 20,
    // flex: 1,
    // con flat list dejo de funcionar
    // gap: 15,
  },

  list: {
    // flex: 1,
    gap: 15,
    paddingBottom: 20,
  },

  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
  },
  modalDetailMessage: {
    fontSize: 14,
  },
  selectedTask: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  modalButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
