import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {SwipeableMethods} from 'react-native-gesture-handler/lib/typescript/components/ReanimatedSwipeable';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import AnimatedText from '../AnimatedText';
import {styles} from './styles/leftAction.styles';
import {colors} from '@src/theme/colors';
import Icon from 'react-native-vector-icons/AntDesign';

type LeftActionsProps = {
  dragX: SharedValue<number>;
  swipeableRef: React.RefObject<SwipeableMethods>;
};

const LeftAction = ({dragX, swipeableRef}: LeftActionsProps) => {
  return (
    <RectButton
      style={{...styles.rectButton, backgroundColor: colors('green')}}
      onPress={() => swipeableRef.current!.close()}>
      <Icon name="checkcircleo" size={20} color={'#fff'} />
    </RectButton>
  );
};

export const renderLeftActions = (
  _progress: any,
  translation: SharedValue<number>,
  swipeableRef: React.RefObject<SwipeableMethods>,
) => <LeftAction dragX={translation} swipeableRef={swipeableRef} />;
