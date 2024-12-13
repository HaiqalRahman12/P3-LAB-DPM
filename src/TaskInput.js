import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    onAddTask(task);
    setTask('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add a new task..."
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginRight: 10,
  },
});

export default TaskInput;
