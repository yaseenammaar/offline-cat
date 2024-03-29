import React, { useState, useEffect } from 'react';
import { Text } from 'react-native'; // Import Text component from react-native
import SplashScreen from './views/screens/SplashScreen';
import HomeScreen from './views/screens/HomeScreen';
import WalletSetupScreen from './views/screens/WalletSetupScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import { Buffer } from 'buffer';
global.Buffer = Buffer;

export default function App() {
    const [isSplashActive, setIsSplashActive] = useState(true);
    const [isWalletCreated, setIsWalletCreated] = useState(false);

    useEffect(() => {
        // Check if wallet is created
        AsyncStorage.getItem('walletCreated')
            .then(value => {
                // Convert value to boolean
                const walletCreated = value === 'true';
                setIsWalletCreated(walletCreated);
            })
            .catch(error => {
                console.error('Error retrieving walletCreated:', error);
                // Handle error here, e.g., set isWalletCreated to false
                setIsWalletCreated(false);
            })
            .finally(() => {
                // Hide splash screen after 5 seconds
                setTimeout(() => {
                    setIsSplashActive(false);
                }, 5000); // The splash screen will be visible for 5 seconds
            });

        // Read public key and private key here if needed
        AsyncStorage.multiGet(['publicKey', 'privateKey'])
            .then(values => {
                const publicKey = values[0][1]; // Get public key from values array
                const privateKey = values[1][1]; // Get private key from values array
                // Do something with publicKey and privateKey
            })
            .catch(error => {
                console.error('Error retrieving keys:', error);
            });
    }, []); // Ensure useEffect only runs once on component mount

    return isSplashActive ? <SplashScreen /> : (
        isWalletCreated ? <HomeScreen /> : <WalletSetupScreen />
    );
}
