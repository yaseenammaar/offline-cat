import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createWallet, fetchBalance } from '../../controllers/web3/Web3Controller';
import { readNfcAndTransferSOL } from '../../controllers/nfc/NfcController';
import BalanceCard from '../components/BalanceCard';
import ButtonsGrid from '../components/ButtonsGrid';
import ButtonsGridNFC from '../components/ButtonsGridNFC';
import TopButtons from '../components/TopButtons';
import CalculatorScreen from '../components/CalculatorScreen';
import { styles } from '../style/style'; 

export default function HomeScreen({ navigation }) {
    const [publicKey, setPublicKey] = useState(null);
    const [balance, setBalance] = useState(0);
    const [calculatorDisplayValue, setCalculatorDisplayValue] = useState('0.00');

    useEffect(() => {
        const fetchAndUpdateBalance = () => {
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
                        // Save the newly created public key to AsyncStorage
                        AsyncStorage.setItem('publicKey', publicKey)
                            .catch(error => console.error('Error saving public key to AsyncStorage:', error));
                    }
                })
                .catch(error => console.error('Error fetching public key from AsyncStorage:', error));
        };

        // Fetch balance immediately and then every 10 seconds
        fetchAndUpdateBalance();
        const interval = setInterval(fetchAndUpdateBalance, 10000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    const handleLeftPress = () => {
        console.log('Left button pressed');
    };

    const handleRightPress = () => {
        console.log('Right button pressed');
    };
    const handleCalculatorDisplayChange = (value) => {
        console.log(value)
        setCalculatorDisplayValue(value);
    };

    const handleSendPress = () => {
        // Handle "Send" button press logic here
        console.log('Send button pressed', calculatorDisplayValue);
        
    };

    const handleReceivePress = () => {
        // Handle "Receive" button press logic here
        console.log('Receive button pressed', calculatorDisplayValue);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="auto" />
            <TopButtons onLeftPress={handleLeftPress} onRightPress={handleRightPress} navigation={navigation} />
            <BalanceCard balance={balance} onPress={() => console.log('Card pressed!')} />
            <ButtonsGrid onSendPress={handleSendPress} onReceivePress={handleReceivePress} />
            <CalculatorScreen displayValue={calculatorDisplayValue} onDisplayChange={handleCalculatorDisplayChange} />
            <ButtonsGridNFC />
        </SafeAreaView>
    );
}
