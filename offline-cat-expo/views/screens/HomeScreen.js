import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
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
import CalculatorScreen from '../components/CalculatorScreen';
import { styles } from '../style/style'; 

// Assuming `styles` are imported from '../style/style';
// If not, you need to define them in this file.

export default function HomeScreen() {
    const [publicKey, setPublicKey] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        // Fetch public key from AsyncStorage
        AsyncStorage.getItem('publicKey')
            .then(publicKey => {
                if (publicKey) {
                    setPublicKey(publicKey);
                    // Fetch balance using the retrieved public key
                    fetchBalance(publicKey)
                        .then(balance => setBalance(balance.toFixed(3)))
                        .catch(error => console.error('Error fetching balance:', error));
                } else {
                    // Public key not found in AsyncStorage, create a new wallet
                    const { publicKey, privateKey } = createWallet();
                    setPublicKey(publicKey);
                    setPrivateKey(privateKey);
                    // Save the newly created public key to AsyncStorage
                    AsyncStorage.setItem('publicKey', publicKey)
                        .catch(error => console.error('Error saving public key to AsyncStorage:', error));
                }
            })
            .catch(error => console.error('Error fetching public key from AsyncStorage:', error));
    }, []);

    const handleCreateWallet = () => {
        const { publicKey, privateKey } = createWallet();
        setPublicKey(publicKey);
        setPrivateKey(privateKey);
    };

    const handleTransferFunds = async () => {
        await transferFunds("", "3U6pFnWJxtoGEyFXNiQ6fBEUskidyPEcABfkSR5twBVj", parseFloat(0.1));
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

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="auto" />
            <TopButtons onLeftPress={handleLeftPress} onRightPress={handleRightPress} />
            <ScrollView style={styles.scrollView}>
                <BalanceCard balance={balance} onPress={() => console.log('Card pressed!')} />
                <ButtonsGrid />
                <CalculatorScreen/>
                {/* Replace your button container or any additional content that needs to scroll */}
            </ScrollView>
            <BottomNav />
        </SafeAreaView>
    );
}
