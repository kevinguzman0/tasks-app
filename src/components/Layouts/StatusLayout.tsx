import {colors} from '@src/theme/colors';
import React, {Fragment} from 'react';
import {ColorValue, StatusBar, StyleSheet, View, ViewStyle} from 'react-native';

export type StatusBarStyle = 'default' | 'light-content' | 'dark-content';

type Props = {
  children: React.ReactNode;
  barStyle?: StatusBarStyle;
  barColor?: ColorValue;
  style?: ViewStyle;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignContent: 'center',
    backgroundColor: colors('white'),
    justifyContent: 'flex-start',
  },
});

const StatusLayout = ({
  children,
  barStyle,
  barColor = colors('purple'),
  style,
}: Props) => {
  return (
    <Fragment>
      <StatusBar animated barStyle={barStyle} backgroundColor={barColor} />
      <View style={[styles.container, style]}>{children}</View>
    </Fragment>
  );
};

export default StatusLayout;
