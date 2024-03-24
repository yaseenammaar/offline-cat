import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BalanceCard = ({ balance }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Balance (SOL)</Text>
        <Text style={styles.balance}>{balance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100, // Adjust this value to leave space for other components
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    zIndex: 999, // Ensure the card is on top
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  balance: {
    fontSize: 24,
  },
});

export default BalanceCard;
