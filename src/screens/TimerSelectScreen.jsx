import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../components/Button';

export default function TimerSelectScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.timers}>
        <View style={styles.timersInner}>
          <Button
            style={styles.timersButton}
            label="3分"
            onPress={() => { navigation.navigate('Timer', { minutes: 60 }); }}
          />
          <Button
            style={styles.timersButton}
            label="4分"
            onPress={() => { navigation.navigate('Timer', { minutes: 240 }); }}
          />
          <Button
            label="5分"
            onPress={() => { navigation.navigate('Timer', { minutes: 300 }); }}
          />
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
