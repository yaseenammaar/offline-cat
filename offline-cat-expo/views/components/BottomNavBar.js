import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, PanResponder, Vibration, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { readNfcAndTransferSOL } from '../../controllers/nfc/NfcController';

const BottomNav = () => {
  const dragValue = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window');
  const maxDragDistance = 0.2 * width; // Adjusted to 30% as requested

  const onThresholdLeft = () => {

    console.log('Reached left threshold');
    // Add any action you want to perform when reaching the left threshold
    Vibration.vibrate(100); // Example action: Vibrate for 100 milliseconds
  };

  const onThresholdRight = () => {
    readNfcAndTransferSOL("Lol");
    // Add any action you want to perform when reaching the right threshold
    Vibration.vibrate(100); // Example action: Vibrate for 100 milliseconds
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        let dx = gestureState.dx;
        dx = Math.max(-maxDragDistance, dx);
        dx = Math.min(maxDragDistance, dx);
        dragValue.setValue(dx);

        if (dx <= -maxDragDistance) {
          onThresholdLeft();
        } else if (dx >= maxDragDistance) {
          onThresholdRight();
        }
      },
      onPanResponderRelease: () => {
        Animated.spring(dragValue, {
          toValue: 0,
          friction: 5,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => console.log('Home Pressed')}>
          <Feather name="arrow-down-left" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Search Pressed')} />
        <TouchableOpacity onPress={() => console.log('Account Pressed')}>
          <Feather name="arrow-up-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.circle,
          {
            transform: [{ translateX: dragValue }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    backgroundColor: '#eee',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  circle: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D49092',
    justifyContent: 'center',
    alignItems: 'center',
    top: -10, // Adjust based on your design
  },
});

export default BottomNav;
