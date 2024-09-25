import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '@src/theme/colors';
import Icon from 'react-native-vector-icons/AntDesign';

type RoundButtonProps = {
  onPress: () => void;
  iconName: string;
};

export default function RoundButton({onPress, iconName}: RoundButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={iconName} size={30} color={colors('darkGrey')} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    backgroundColor: colors('grey'),
    padding: 8,
  },
});
