import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '@src/theme/colors';

type TextInputCustomProps = {
  placeholder: string;
};

export default function TextInputCustom({placeholder}: TextInputCustomProps) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      placeholderTextColor={colors('darkGrey')}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: colors('grey'),
    paddingLeft: 20,
  },
});
