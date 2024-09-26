import {Text} from 'react-native';
import React, {useEffect, useMemo, useRef} from 'react';
import Swipeable, {
  SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable';
import {Task} from '@src/types/task.type';
import {styles} from './styles/swipeableBox.styles';
import {renderLeftActions} from './LeftAction';
import {colors} from '@src/theme/colors';
import Animated from 'react-native-reanimated';
import {renderRightActions} from './RightAction';
import {useSwipeableAnimation} from '@src/hooks/useSwipeableAnimation';

export default function SwipeableBox({item}: {item: Task}) {
  const swipeableRow = useRef<SwipeableMethods>(null);
  const {setBGColor, animatedStyle} = useSwipeableAnimation(colors('purple'));

  const date = useMemo(() => {
    return new Date(item.createdAt).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }, [item.createdAt]);

  useEffect(() => {
    if (item.completed) {
      setBGColor(colors('green'));
    } else {
      setBGColor(colors('purple2'));
    }
  }, [item.completed, setBGColor]);

  return (
    <Swipeable
      ref={swipeableRow}
      friction={3}
      enableTrackpadTwoFingerGesture
      leftThreshold={30}
      rightThreshold={40}
      containerStyle={[styles.container, animatedStyle]}
      renderRightActions={(_, progress) =>
        renderRightActions(_, progress, swipeableRow, item)
      }
      renderLeftActions={(_, progress) =>
        renderLeftActions(_, progress, swipeableRow, item)
      }>
      <Animated.View style={[styles.containerContent, animatedStyle]}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </Animated.View>
    </Swipeable>
  );
}
