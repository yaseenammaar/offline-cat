import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { createWallet, fetchBalance, transferFunds } from '../../controllers/web3/Web3Controller';
import { readNdef, writeNdef, readNfcAndTransferSOL } from '../../controllers/nfc/NfcController';
import BalanceCard from '../components/BalanceCard';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; // Ensure these are installed
import { MaterialIcons } from '@expo/vector-icons';
import FlipCardButton from '../components/FlipCardButton';
import ListItem from '../components/ListItem';
import ButtonsGrid from '../components/ButtonsGrid';
import TopButtons from '../components/TopButtons';
import BottomNav from '../components/BottomNavBar';
import { styles } from '../style/style'; 

// Assuming `styles` are imported from '../style/style';
// If not, you need to define them in this file.

export default function HomeScreen() {
    const [publicKey, setPublicKey] = useState('4zEXEuJSaZPePVMu6uuNJV3qLdKquWywVaf1symAu3f6');
    const [privateKey, setPrivateKey] = useState(null);
    const [balance, setBalance] = useState(0);

    const handleCreateWallet = () => {
        const { publicKey, privateKey } = createWallet();
        setPublicKey(publicKey);
        setPrivateKey(privateKey);
    };

    const handleTransferFunds = async () => {
        await transferFunds("2qCYWiZz74eNaB8bYkaimaHd1Sb5ZTxrjxm5WcUCE4vZbpWmL85HDLkib5sVLfPEnN2sCNaWFnLnWKEzprsYYdFw", "3U6pFnWJxtoGEyFXNiQ6fBEUskidyPEcABfkSR5twBVj", parseFloat(0.1));
    };

    const handleNFCTransaction = async () => {
        readNfcAndTransferSOL("lol");
    };

    const handleLeftPress = () => {
        console.log('Left button pressed');
    };

    const handleRightPress = () => {
        console.log('Right button pressed');
    };

    useEffect(() => {
      if (publicKey) {
          fetchBalance(publicKey)
              .then(balance => setBalance(balance.toFixed(3)))
              .catch(console.error);
      }
  }, [publicKey]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="auto" />
            <TopButtons onLeftPress={handleLeftPress} onRightPress={handleRightPress} />
            <ScrollView style={styles.scrollView}>
                <BalanceCard balance={balance} onPress={() => console.log('Card pressed!')} />
                <ButtonsGrid />
                {/* Replace your button container or any additional content that needs to scroll */}
            </ScrollView>
            <BottomNav />
        </SafeAreaView>
    );
}

// Make sure your styles.safeArea, styles.scrollView, and any other necessary styles are correctly defined in your styles object.
