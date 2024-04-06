import React, { useState, useEffect } from 'react';
import { Text } from 'react-native'; // Import Text component from react-native
import SplashScreen from './views/screens/SplashScreen';
import HomeScreen from './views/screens/HomeScreen';
import WalletSetupScreen from './views/screens/WalletSetupScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import 'react-native-get-random-values';
// import 'react-native-url-polyfill/auto';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer
        >
        {/* isWalletCreated ? <HomeScreen /> : <WalletSetupScreen /> */}
        <Stack.Navigator 
        screenOptions={{
            headerShown: false 
        }} 

        initialRouteName='Splash'>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen name="Profile" component={WalletSetupScreen} />
      </Stack.Navigator>
        </NavigationContainer>
    );
}
