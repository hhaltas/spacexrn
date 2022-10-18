import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {cBlack} from '../styles/color';

const _Yinput = (props = {extraStyle: {}}) => {
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
    borderRadius: 4,
    backgroundColor: '#ffffff',
    padding: 15,
    color: cBlack,
    fontWeight: '600',
    fontSize: 15,
    height: 47,
  },
});

export default _Yinput;
