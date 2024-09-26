import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/home.styles';

export default function ListEmpty() {
  return (
    <View style={styles.containerTextEmpty}>
      <Text style={styles.textEmpty}>No tasks yet...</Text>
    </View>
  );
}
