import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BalanceCard = ({ balance, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.card}>
        <Text style={styles.title}>{balance} SOL</Text>
        <Text style={styles.balance}>Solana Devnet</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    
    top: 70, // Adjust this value to leave space for other components
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    zIndex: 999,
    margin: 10
  },
  card: {
    backgroundColor: '#6A6E77',
    padding: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#F7F7F0',
  },
  balance: {
    fontSize: 18,
    color: '#F7F7F0',
  },
});

export default BalanceCard;
