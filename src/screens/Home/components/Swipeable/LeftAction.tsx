import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {SwipeableMethods} from 'react-native-gesture-handler/lib/typescript/components/ReanimatedSwipeable';
import {SharedValue} from 'react-native-reanimated';
import {styles} from './styles/leftAction.styles';
import {colors} from '@src/theme/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTasks} from '@src/hooks/useTask.hook';
import {Task} from '@src/types/task.type';
import {LeftActionsProps} from './types/swipeable.type';

const LeftAction = ({dragX, swipeableRef, task}: LeftActionsProps) => {
  const {updateTask} = useTasks();
  const bg = task.completed ? colors('red') : colors('green');
  const iconName = task.completed ? 'closecircleo' : 'checkcircleo';

  const handleUpdateTask = async () => {
    swipeableRef.current!.close();
    await updateTask({
      id: task._id!,
      body: {...task, completed: !task.completed},
    });
  };

  return (
    <RectButton
      style={[styles.rectButton, {backgroundColor: bg}]}
      onPress={handleUpdateTask}>
      <Icon name={iconName} size={20} color={'#fff'} />
    </RectButton>
  );
};

export const renderLeftActions = (
  _progress: any,
  translation: SharedValue<number>,
  swipeableRef: React.RefObject<SwipeableMethods>,
  task: Partial<Task>,
) => <LeftAction dragX={translation} swipeableRef={swipeableRef} task={task} />;
