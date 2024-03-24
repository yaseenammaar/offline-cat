import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FlipCard from 'react-native-flip-card';

const FlipCardButton = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePress = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <View style={styles.container}>
      <FlipCard
        style={styles.flipCard}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={isFlipped}
        clickable={false}
      >
        {/* Front side */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handlePress}
          style={[styles.card, styles.front]}
        >
          <Text style={styles.cardText}>{frontContent}</Text>
        </TouchableOpacity>

        {/* Back side */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handlePress}
          style={[styles.card, styles.back]}
        >
          <Text style={styles.cardText}>{backContent}</Text>
        </TouchableOpacity>
      </FlipCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  flipCard: {
    width: 200,
    height: 60,
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  front: {
    backgroundColor: '#fff',
  },
  back: {
    backgroundColor: '#fff',
    transform: [{ rotateY: '180deg' }],
    position: 'absolute',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
});

export default FlipCardButton;
