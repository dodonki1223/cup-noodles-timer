import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.timer}>
        <Text style={styles.timerText}>5:00:00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  timer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 100,
    lineHeight: 150,
    fontWeight: 'bold',
  },
});
