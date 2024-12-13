import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To-Do List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor:'yellow'
  },
  title: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Header;
