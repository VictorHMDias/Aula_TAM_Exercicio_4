// app/tabs/explore.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PortfolioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfólio em desenvolvimento...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1EFF',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
