import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {cBlack} from '../styles/color';

const _Sinput = (props = {extraStyle: {}}) => {
  if (TextInput.defaultProps) {
    TextInput.defaultProps.allowFontScaling = false;
  } else {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
  }
  return (
    <TextInput
      placeholderTextColor={'#c0a9d0'}
      style={[styles.input, props.extraStyle]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    color: cBlack,
    fontWeight: '600',
    fontSize: 14,
    height: 30,
  },
});

export default _Sinput;
