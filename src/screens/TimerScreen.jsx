import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, Alert,
} from 'react-native';
import { shape } from 'prop-types';

export default function TimerScreen(props) {
  const { route } = props;
  const [minutes, setMinutes] = useState(route.params.minutes);

  useEffect(() => {
    let n = minutes;
    const interval = setInterval(() => {
      n -= 1;
      setMinutes(n);
      if (n === 0) {
        Alert.alert('ラーメンが出来ました！');
        clearInterval(interval);
      }
    }, 1000);
    return function cleanUp() {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Text style={styles.timerText}>{minutes}</Text>
      </View>
    </View>
  );
}

TimerScreen.propTypes = {
  route: shape(),
};

TimerScreen.defaultProps = {
  route: null,
};

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
