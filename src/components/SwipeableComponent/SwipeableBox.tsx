import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import Swipeable, {
  SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable';
import {Task} from '@src/types/task.type';
import {styles} from './styles/swipeableBox.styles';
import {renderLeftActions} from './LeftAction';
import {renderRightActions} from './RightAction';

export default function SwipeableBox({item}: {item: Task}) {
  const swipeableRow = useRef<SwipeableMethods>(null);

  return (
    <Swipeable
      ref={swipeableRow}
      friction={3}
      enableTrackpadTwoFingerGesture
      leftThreshold={30}
      rightThreshold={40}
      containerStyle={styles.container}
      renderRightActions={(_, progress) =>
        renderRightActions(_, progress, swipeableRow)
      }
      renderLeftActions={(_, progress) =>
        renderLeftActions(_, progress, swipeableRow)
      }>
      <View style={styles.containerContent}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.dateText}>9:00 AM</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
    </Swipeable>
  );
}
