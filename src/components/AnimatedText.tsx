import React, {ReactElement} from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function AnimatedText({
  dragX,
  text,
}: {
  dragX: SharedValue<number>;
  text: string | ReactElement;
}) {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          dragX.value,
          [0, 50, 100, 101],
          [-20, 0, 0, 1],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  return <Animated.Text style={animatedStyle}>{text}</Animated.Text>;
}
