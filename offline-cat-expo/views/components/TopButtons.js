// TopButtons.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const TopButtons = ({ onLeftPress, onRightPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.leftButton]}
        onPress={onLeftPress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>♦</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.rightButton]}
        onPress={onLeftPress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>♦</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 50, // Adjust based on your layout needs
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    margin: 10
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80BCCF', // Button color
  },
  leftButton: {
    // Additional styling for the left button if needed
  },
  rightButton: {
    // Additional styling for the right button if needed
    backgroundColor: '#D49092'
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 18, // Adjust size as needed
    fontWeight: 'bold',
  },
});

export default TopButtons;
