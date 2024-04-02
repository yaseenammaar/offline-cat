import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 icon from expo/vector-icons

const CalculatorScreen = () => {
  const [displayValue, setDisplayValue] = useState('0.00'); // Set initial state to '0.00'

  const handleKeypadPress = (button) => {
    let newValue;
  
    if (button === 'C') {
      newValue = '0.00'; // Reset displayValue to '0.00' on clear
    } else if (button === '=') {
      newValue = parseFloat(eval(displayValue)).toFixed(2).toString();
    } else if (button === '.') {
      // Check if displayValue already contains a decimal point
      if (!displayValue.includes('.')) {
        newValue = displayValue + button;
      } else {
        newValue = displayValue;
      }
    } else {
      // Check if displayValue is '0.00', then replace it with the new number
      newValue = displayValue === '0.00' ? button : displayValue + button;
    }
  
    setDisplayValue(newValue);
  };
  

  const CalculatorKeypad = () => {
    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '.', '='];

    return (
      <View style={styles.keypadContainer}>
        {[...Array(4)].map((_, rowIndex) => (
          <View key={rowIndex} style={styles.rowContainer}>
            {buttons.slice(rowIndex * 3, (rowIndex + 1) * 3).map((button, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => handleKeypadPress(button)}
              >
                {button === '=' ? (
                  <FontAwesome5 name="check" size={20} color="black" />
                ) : (
                  <Text style={styles.buttonText}>{button}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{`${displayValue} SOL`}</Text>
      </View>
      <CalculatorKeypad />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    margin: 30
  },
  displayContainer: {
    backgroundColor: '#f0f0fa',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    borderRadius: 30,
    margin: 10,
  },
  displayText: {
    textAlignVertical: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'right',
    width: '100%',
    color: 'grey',
  },
  keypadContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 25,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default CalculatorScreen;
