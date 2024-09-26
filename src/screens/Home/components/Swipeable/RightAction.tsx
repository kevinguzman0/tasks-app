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
import {ActionButtonProps, RightActionsProps} from './types/swipeable.type';

const ActionButton = ({onPress, iconName, color}: ActionButtonProps) => (
  <RectButton
    onPress={onPress}
    style={[styles.rectButton, {backgroundColor: color}]}>
    <Icon name={iconName} size={20} color={'#fff'} />
  </RectButton>
);

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

  const actionButtons = [
    {
      onPress: handleDelete,
      iconName: 'delete',
      color: colors('red'),
    },
    {
      onPress: handleUpdate,
      iconName: 'edit',
      color: colors('yellow'),
    },
  ];

  return actionButtons.map((action, index) => (
    <ActionButton
      key={index}
      onPress={action.onPress}
      iconName={action.iconName}
      color={action.color}
    />
  ));
};

export const renderRightActions = (
  _progress: any,
  translation: SharedValue<number>,
  swipeableRef: React.RefObject<SwipeableMethods>,
  task: Task,
) => (
  <RightAction dragX={translation} swipeableRef={swipeableRef} task={task} />
);
