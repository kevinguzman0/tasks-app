import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '@src/theme/colors';

type TextInputCustomProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function TextInputCustom({
  placeholder,
  value,
  onChangeText,
}: TextInputCustomProps) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      placeholderTextColor={colors('darkGrey')}
      value={value}
      onChangeText={onChangeText}
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
