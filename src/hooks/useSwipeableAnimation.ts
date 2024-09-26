import {useCallback} from 'react';
import {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useSwipeableAnimation = (initialColor: string) => {
  const bg: SharedValue<string> = useSharedValue(initialColor);

  const setBGColor = useCallback(
    (color: string) => {
      bg.value = withTiming(color, {duration: 500});
    },
    [bg],
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: bg.value,
    };
  });

  return {setBGColor, animatedStyle};
};
