import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import Header from './src/Header';
import TaskInput from './src/TaskInput';
import TaskItem from './src/TaskItem';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.trim()) {
      Alert.alert('Error', 'Task cannot be empty!');
      return;
    }
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Math.random().toString(), text: task },
    ]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header />
      <TaskInput onAddTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={deleteTask} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
