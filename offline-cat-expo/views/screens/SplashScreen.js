import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Typewriter from 'react-native-typewriter';

const SplashScreen = ({ navigation }) => {
  const [timePassed, setTimePassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimePassed(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!timePassed) {
    return (
      <View style={styles.container}>
        <Typewriter typing={0.5} style={styles.text}>
          Offline
        </Typewriter>
      </View>
    );
  }

  navigation.navigate('Home');
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F0', // Feel free to change the background color
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3C4047',
  },
});

export default SplashScreen;
