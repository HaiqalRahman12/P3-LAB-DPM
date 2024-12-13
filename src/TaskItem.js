import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = ({ task, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(task.id)}>
      <View style={styles.taskItem}>
        <Text>{task.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
});

export default TaskItem;
