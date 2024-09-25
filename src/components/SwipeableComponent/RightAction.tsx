import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {SwipeableMethods} from 'react-native-gesture-handler/lib/typescript/components/ReanimatedSwipeable';
import {SharedValue} from 'react-native-reanimated';
import {styles} from './styles/leftAction.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '@src/theme/colors';

type RightActionsProps = {
  dragX: SharedValue<number>;
  swipeableRef: React.RefObject<SwipeableMethods>;
};

const RightAction = ({dragX, swipeableRef}: RightActionsProps) => {
  return (
    <>
      <RectButton
        style={{...styles.rectButton, backgroundColor: colors('red')}}
        onPress={() => swipeableRef.current!.close()}>
        <Icon name="delete" size={20} color={'#fff'} />
      </RectButton>
      <RectButton
        style={{...styles.rectButton, backgroundColor: colors('yellow')}}
        onPress={() => swipeableRef.current!.close()}>
        <Icon name="edit" size={20} color={'#fff'} />
      </RectButton>
    </>
  );
};

export const renderRightActions = (
  _progress: any,
  translation: SharedValue<number>,
  swipeableRef: React.RefObject<SwipeableMethods>,
) => <RightAction dragX={translation} swipeableRef={swipeableRef} />;
