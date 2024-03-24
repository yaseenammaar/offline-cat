// views/screens/SplashScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Offline</Text>
            {/* You can replace Text with your Image */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F0', // Feel free to change the background color
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3C4047',
    },
});

export default SplashScreen;
