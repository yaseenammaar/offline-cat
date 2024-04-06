// ButtonsGrid.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { writeNdef } from '../../controllers/nfc/NfcController';
import AsyncStorage from '@react-native-async-storage/async-storage'; 


const activateCard = async () => {
  const pvtKey = await AsyncStorage.getItem('privateKey');
  console.log("Private Key", pvtKey);
  console.log("Activate Button tapped")
  await writeNdef(pvtKey, "Tap to Activate Card")
};

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const ButtonsGridNFC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, { justifyContent: 'center' }]}>
        <Button title="Activate Card" onPress={activateCard} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    padding: 20, // Add padding around the grid
    margin: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the button horizontally
    marginBottom: 20, // Add some space between the rows
  },
  button: {
    backgroundColor: '#80BCCF', // Button background color
    padding: 20, // Button padding
    borderRadius: 20, // Round the corners of the buttons
    width: '50%', // Set button width to 50% of the container
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
  },
  buttonText: {
    color: '#F7F7F0', // Text color
    fontWeight: 'bold', // Make the text bold
    fontSize: 16, // Text size
  },
});

export default ButtonsGridNFC;
