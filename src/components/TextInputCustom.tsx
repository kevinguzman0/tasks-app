import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import React from 'react';
import {colors} from '@src/theme/colors';

type TextInputCustomProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  inputProps?: TextInputProps;
};

export default function TextInputCustom({
  placeholder,
  value,
  onChangeText,
  ...props
}: TextInputCustomProps) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      placeholderTextColor={colors('darkGrey')}
      value={value}
      onChangeText={onChangeText}
      {...props}
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
