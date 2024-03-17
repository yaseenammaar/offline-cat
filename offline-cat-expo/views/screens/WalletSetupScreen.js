// views/screens/WalletOptionsScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const WalletSetupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Create Wallet"
        onPress={() => navigation.navigate('Home')} // Add actual wallet creation logic here
      />
      <Button
        title="Import Wallet"
        onPress={() => navigation.navigate('Home')} // Add actual wallet import logic here
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WalletSetupScreen;
