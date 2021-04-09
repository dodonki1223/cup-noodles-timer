import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function TimerSelectScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.timers}>
        <View style={styles.timersInner}>
          <Button style={styles.timersButton} label="3分" />
          <Button style={styles.timersButton} label="4分" />
          <Button label="5分" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timers: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timersInner: {
    flex: 1,
    justifyContent: 'center',
  },
  timersButton: {
    marginBottom: 15,
  },
});