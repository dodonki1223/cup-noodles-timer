import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { string, shape, func } from 'prop-types';

export default function Button(props) {
  const { label, style, onPress } = props;
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
  style: shape(),
  onPress: func,
};

Button.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 20,
    paddingVertical: 8,
    paddingHorizontal: 80,
    color: '#fff',
  },
});
