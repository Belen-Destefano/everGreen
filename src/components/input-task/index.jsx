import React from "react";
import { Button, TextInput, View } from "react-native";

import { styles } from "./style";

const InputTask = ({ onHandlerChangeText, task, onHandlerCreateTasks }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Ingresar informacion"
        autoCapitalize="none"
        autoCorrect={false}
        cursorColor="#5F6C37"
        selectionColor="red"
        placeholderTextColor="#B8C892"
        onChangeText={onHandlerChangeText}
        value={task}
      />

      <Button
        disabled={task.length === 0}
        title="create"
        color="#5F6C37"
        onPress={onHandlerCreateTasks}
      />
    </View>
  );
};

export default InputTask;
