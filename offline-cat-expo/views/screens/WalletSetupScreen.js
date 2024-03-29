import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { createWallet, getPublicKeyFromPrivateKey } from '../../controllers/web3/Web3Controller';
import bs58 from 'bs58';

const WalletSetupScreen = ({ navigation }) => {
  const [isCreatingWallet, setIsCreatingWallet] = useState(false);
  const [privateKey, setPrivateKey] = useState('');
  const [publicKey, setPublicKey] = useState('');

  //2qCYWiZz74eNaB8bYkaimaHd1Sb5ZTxrjxm5WcUCE4vZbpWmL85HDLkib5sVLfPEnN2sCNaWFnLnWKEzprsYYdFw
  //2qCYWiZz74eNaB8bYkaimaHd1Sb5ZTxrjxm5WcUCE4vZbpWmL85HDLkib5sVLfPEnN2sCNaWFnLnWKEzprsYYdFw

  //91,148,254,87,251,247,102,167,13,179,193,166,23,237,8,179,138,80,127,101,159,95,188,153,178,240,77,84,86,128,237,174,183,83,55,49,120,228,179,187,105,59,121,25,230,208,150,206,90,90,160,28,122,201,198,104,78,128,185,156,81,61,64,58

  const handleCreateWallet = async () => {
    // Call the createWallet function
    const walletCreated = await createWallet();

    // If wallet creation was successful, update walletCreated in AsyncStorage
    if (walletCreated) {
      try {
        await AsyncStorage.setItem('walletCreated', 'true');
        navigation.navigate('Home');
      } catch (error) {
        console.error('Error setting walletCreated:', error);
      }
    }
  };

  const handleImportWallet = () => {
    setIsCreatingWallet(true);
  };

  const handleImport = async () => {
    try {
      // Validate private key
      if (!privateKey) {
        Alert.alert('Error', 'Please enter a private key');
        return;
      }
  
      // Retrieve the public key from the private key
      const publicKey = await getPublicKeyFromPrivateKey(privateKey);
  
      // Check if public key is retrieved successfully
      if (publicKey) {
        console.log("Found Wallet: pubkey", publicKey);
  
        // Store public key, private key, and set walletCreated to true in AsyncStorage
        await AsyncStorage.multiSet([
          ['publicKey', publicKey],
          ['privateKey', privateKey],
          ['walletCreated', 'true']
        ]);
  
        // Navigate to Home screen
        // navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Failed to derive public key from private key');
      }
    } catch (error) {
      console.error('Error importing wallet:', error);
      Alert.alert('Error', 'Failed to import wallet');
    }
  };
  return (
    <View style={styles.container}>
      {!isCreatingWallet ? (
        <>
          <TouchableOpacity style={styles.button} onPress={handleCreateWallet} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Create Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleImportWallet} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Import Wallet</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter Private Key"
            value={privateKey}
            onChangeText={setPrivateKey}
            multiline={true}
            maxHeight={150}
            minHeight={50}
          />
          <TouchableOpacity style={styles.button} onPress={handleImport} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Import</Text>
          </TouchableOpacity>
          {publicKey ? (
            <Text style={styles.publicKeyText}>Public Key: {publicKey}</Text>
          ) : null}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#64AB7C', // Button background color
    padding: 20, // Button padding
    borderRadius: 20, // Round the corners of the buttons
    width: '48%', // Approximately half the container width minus some space for margin
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
    margin: 10,
  },
  buttonText: {
    color: '#F7F7F0', // Text color
    fontWeight: 'bold', // Make the text bold
    fontSize: 16, // Text size
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    paddingTop: 20,
    width: '80%',
    
  },
  publicKeyText: {
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default WalletSetupScreen;
