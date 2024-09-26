import {Task} from '@src/types/task.type';
import {SwipeableMethods} from 'react-native-gesture-handler/lib/typescript/components/ReanimatedSwipeable';
import {SharedValue} from 'react-native-reanimated';

export type RightActionsProps = {
  dragX: SharedValue<number>;
  swipeableRef: React.RefObject<SwipeableMethods>;
  task: Task;
};

export type ActionButtonProps = {
  onPress: () => void;
  iconName: string;
  color: string;
};

export type LeftActionsProps = {
  dragX: SharedValue<number>;
  swipeableRef: React.RefObject<SwipeableMethods>;
  task: Partial<Task>;
};
