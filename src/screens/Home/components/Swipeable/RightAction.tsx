import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {SwipeableMethods} from 'react-native-gesture-handler/lib/typescript/components/ReanimatedSwipeable';
import {SharedValue} from 'react-native-reanimated';
import {styles} from './styles/leftAction.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '@src/theme/colors';
import {useTasks} from '@src/hooks/useTask.hook';
import {useModal} from '../../context/ModalContext';
import {Task} from '@src/types/task.type';

type RightActionsProps = {
  dragX: SharedValue<number>;
  swipeableRef: React.RefObject<SwipeableMethods>;
  task: Task;
};

const RightAction = ({dragX, swipeableRef, task}: RightActionsProps) => {
  const {deleteTask} = useTasks();
  const {bottomSheetModalRef, editHandle, editTaskHandle} = useModal();

  const handleDelete = async () => {
    swipeableRef.current!.close();
    await deleteTask(task._id);
  };

  const handleUpdate = async () => {
    swipeableRef.current!.close();
    bottomSheetModalRef.current?.present();
    editHandle(true);
    editTaskHandle(task);
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
        onPress={handleUpdate}>
        <Icon name="edit" size={20} color={'#fff'} />
      </RectButton>
    </>
  );
};

export const renderRightActions = (
  _progress: any,
  translation: SharedValue<number>,
  swipeableRef: React.RefObject<SwipeableMethods>,
  task: Task,
) => (
  <RightAction dragX={translation} swipeableRef={swipeableRef} task={task} />
);
