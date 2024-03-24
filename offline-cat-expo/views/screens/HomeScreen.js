import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { createWallet, transferFunds } from '../../controllers/web3/Web3Controller';
import { readNdef, writeNdef, readNfcAndTransferSOL } from '../../controllers/nfc/NfcController';
import BalanceCard from '../components/BalanceCard';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import FlipCardButton from '../components/FlipCardButton';
import { styles } from '../style/style'; 

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

      const handleNFCTransaction = async () => {
        readNfcAndTransferSOL("lol")
      }
      

    return (
        
        <View style={styles.container}>
            
            
             <BalanceCard balance={20.0} />
             {/* <FlipCardButton frontContent="Send" backContent="Receive" />  */}
            {/* <View style={styles.buttonContainer}>
                <Button title="Create Wallet" onPress={handleCreateWallet} />

                <Button title="Transfer SOL" onPress={handleTransferFunds} />
                <Button title="Transfer SOL with NFC" onPress={handleNFCTransaction}/>
                 */}
                {/* <Button title="Import Wallet" onPress={handleImportWallet} /> */}
                {/* <Button title="Scan Tag" onPress={readNdef} />
                <Button title="Write Tag" onPress={writeNdef} />
            </View> */}
            <StatusBar style="auto" />
        </View>
    );
}
