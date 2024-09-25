import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {SwipeableMethods} from 'react-native-gesture-handler/lib/typescript/components/ReanimatedSwipeable';
import {SharedValue} from 'react-native-reanimated';
import {styles} from './styles/leftAction.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '@src/theme/colors';
import {useTasks} from '@src/hooks/useTask.hook';

type RightActionsProps = {
  dragX: SharedValue<number>;
  swipeableRef: React.RefObject<SwipeableMethods>;
  id: string;
};

const RightAction = ({dragX, swipeableRef, id}: RightActionsProps) => {
  const {deleteTask} = useTasks();

  const handleDelete = async () => {
    swipeableRef.current!.close();
    await deleteTask(id);
  };

  return (
    <>
      <RectButton
        style={{...styles.rectButton, backgroundColor: colors('red')}}
        onPress={handleDelete}>
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
  id: string,
) => <RightAction dragX={translation} swipeableRef={swipeableRef} id={id} />;
