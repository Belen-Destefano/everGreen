import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { InputTask, TaskItem, ModalComponent } from "./components";
import { styles } from "./styles";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const onHandlerChangeText = (text) => {
    setTask(text);
  };

  const onHandlerCreateTasks = () => {
    setTasks([
      ...tasks,

      {
        id: Date.now().toString(),

        value: task,
      },
    ]);

    setTask("");

    console.log(tasks);
  };

  const onHandlerModal = (item) => {
    setIsVisible(true);

    setSelectedTask(item);
  };

  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

    setIsVisible(false);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  const renderItem = ({ item }) => <TaskItem item={item} onPressItem={onHandlerModal} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputTask
          onHandlerChangeText={onHandlerChangeText}
          task={task}
          onHandlerCreateTasks={onHandlerCreateTasks}
        />
        <View>
          <FlatList
            contentContainerStyle={styles.list}
            data={tasks}
            renderItem={renderItem}
            style={styles.listContainer}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <ModalComponent
        visible={isVisible}
        selectedTask={selectedTask}
        onHandleDelete={onHandleDelete}
        closeModal={closeModal}
      />
    </SafeAreaView>
  );
}
