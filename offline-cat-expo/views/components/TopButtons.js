// TopButtons.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TopButtons = ({ onLeftPress, onRightPress,navigation }) => {
  const clearWalletCreated = async () => {
    try {
      await AsyncStorage.removeItem('walletCreated');
      console.log('walletCreated cleared');
    } catch (error) {
      console.error('Error clearing walletCreated:', error);
    }
  };

  const clearWallet = async () => {
    console.log("Called Clear")
    try {
      await AsyncStorage.removeItem('walletCreated');
      console.log('walletCreated cleared');
    } catch (error) {
      console.error('Error clearing walletCreated:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Offline</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={[styles.button, styles.rightButton]}
        // onPress={clearWallet} // Call clearWalletCreated when onRightPress is not provided
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
    margin: 10,
    zIndex:1999999
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
  textTitle: {
    color: '#111',
    fontSize: 28, // Adjust size as needed
    marginTop: 15,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 18, // Adjust size as needed
    fontWeight: 'bold',
  },
});

export default TopButtons;
