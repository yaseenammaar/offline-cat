import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { createWallet, transferFunds } from '../../controllers/web3/Web3Controller';
import { readNdef, writeNdef } from '../../controllers/nfc/NfcController';

export default function HomeScreen() {
    const [publicKey, setPublicKey] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);

    const handleCreateWallet = () => {
        const { publicKey, privateKey } = createWallet();
        setPublicKey(publicKey);
        setPrivateKey(privateKey);
    };

    const handleTransferFunds = async () => {
        // if (!wallet) {
        //   alert('Please create a wallet first.');
        //   return;
        // }
    
        // if (!recipientPublicKey || !transferAmount) {
        //   alert('Please enter recipient public key and amount.');
        //   return;
        // }
    
        // try {
          await transferFunds("2qCYWiZz74eNaB8bYkaimaHd1Sb5ZTxrjxm5WcUCE4vZbpWmL85HDLkib5sVLfPEnN2sCNaWFnLnWKEzprsYYdFw", "3U6pFnWJxtoGEyFXNiQ6fBEUskidyPEcABfkSR5twBVj", parseFloat(0.1));
        //   alert('Transfer successful!');
        // } catch (error) {
        //   console.error('Transfer failed:', error);
        //   alert('Transfer failed. Check console for details.');
        // }
      };

    return (
        <View style={styles.container}>
            {publicKey && <Text style={styles.keyText}>Public Key: {publicKey}</Text>}
            {privateKey && <Text style={styles.keyText}>Private Key: {privateKey}</Text>}
            <View style={styles.buttonContainer}>
                <Button title="Create Wallet" onPress={handleCreateWallet} />

                <Button title="Transfer SOL" onPress={handleTransferFunds} />
                
                {/* <Button title="Import Wallet" onPress={handleImportWallet} /> */}
                {/* <Button title="Scan Tag" onPress={handleReadNdef} />
                <Button title="Write Tag" onPress={handleWriteNdef} /> */}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    keyText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
