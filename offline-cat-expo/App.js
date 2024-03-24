import React, { useState, useEffect } from 'react';
import SplashScreen from './views/screens/SplashScreen';
import HomeScreen from './views/screens/HomeScreen';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import { Buffer } from 'buffer';
global.Buffer = Buffer;

export default function App() {
    const [isSplashActive, setIsSplashActive] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsSplashActive(false);
        }, 5000); // The splash screen will be visible for 2 seconds
    }, []);

    return isSplashActive ? <SplashScreen /> : <HomeScreen />;
}