import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Skeleton} from '@rneui/base';
import {wp} from '@src/utilities/responsive';
import {colors} from '@src/theme/colors';

export default function SkeletonLoading({length}: {length: number}) {
  return (
    <View style={styles.container}>
      {[...Array(length)].map((_, index) => (
        <Skeleton
          key={index}
          animation="pulse"
          width={wp(80)}
          height={70}
          style={styles.content}
          skeletonStyle={styles.skeleton}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: colors('white'),
  },
  skeleton: {
    borderRadius: 10,
    backgroundColor: colors('grey'),
  },
});
