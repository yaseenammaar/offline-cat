// ButtonsGrid.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const ButtonsGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="Send" onPress={() => console.log('Button 1 pressed')} />
        <Button title="Receive" onPress={() => console.log('Button 2 pressed')} />
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 110,
    padding: 20, // Add padding around the grid
    margin: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // This spaces out the buttons in each row
    marginBottom: 20, // Add some space between the rows
  },
  button: {
    backgroundColor: '#64AB7C', // Button background color
    padding: 20, // Button padding
    borderRadius: 20, // Round the corners of the buttons
    width: '48%', // Approximately half the container width minus some space for margin
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
  },
  buttonText: {
    color: '#F7F7F0', // Text color
    fontWeight: 'bold', // Make the text bold
    fontSize: 16, // Text size
  },
});

export default ButtonsGrid;
