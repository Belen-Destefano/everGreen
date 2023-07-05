import { Button, Modal, Text, View } from "react-native";

import { styles } from "./style";

const ModalComponent = ({ visible, closeModal, selectedTask, onHandleDelete }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Task Detail</Text>

        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>

          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>

        <View style={styles.modalButtonContainer}>
          {/* <Button title="Cancel" color="green" onPress={() => setIsVisible(false)} /> */}
          <Button title="Cancel" color="green" onPress={closeModal} />

          <Button title="Delete" color="red" onPress={() => onHandleDelete(selectedTask?.id)} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
