import {Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Swipeable, {
  SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable';
import {Task} from '@src/types/task.type';
import {styles} from './styles/swipeableBox.styles';
import {renderLeftActions} from './LeftAction';
import {colors} from '@src/theme/colors';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {renderRightActions} from './RightAction';

export default function SwipeableBox({item}: {item: Task}) {
  const swipeableRow = useRef<SwipeableMethods>(null);
  const date = new Date(item.createdAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const bg: SharedValue<string> = useSharedValue(colors('purple'));

  useEffect(() => {
    if (item.completed) {
      setBGColor(colors('green'));
    } else {
      setBGColor(colors('purple'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.completed]);

  const setBGColor = (color: string) => {
    bg.value = withTiming(color, {duration: 500});
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: bg.value,
    };
  });

  return (
    <Swipeable
      ref={swipeableRow}
      friction={3}
      enableTrackpadTwoFingerGesture
      leftThreshold={30}
      rightThreshold={40}
      containerStyle={styles.container}
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
