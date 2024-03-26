// ButtonsGrid.js
import React,  { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createWallet, transferFunds } from '../../controllers/web3/Web3Controller';
import { readNdef, writeNdef, readNfcAndTransferSOL } from '../../controllers/nfc/NfcController';
import AmountModal from './AmountModal';

const solTransgerNFC = async () => {
  console.log("NFC Button tapped")
  await readNfcAndTransferSOL("lol");
};

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const ButtonsGrid = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleSubmitAmount = (amount) => {
    solTransgerNFC()
    console.log('Amount entered:', amount);
    // Handle the amount here (e.g., state update, API call, etc.)
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="Send" onPress={openModal} />
        <Button title="Receive" onPress={solTransgerNFC} />
      </View>
      <AmountModal
        isVisible={modalVisible}
        onClose={closeModal}
        onSubmit={handleSubmitAmount}
      />
     
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
