import {Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import StatusLayout from '@src/components/Layouts/StatusLayout';
import RoundButton from '@src/components/Buttons/RoundButton';
import {styles} from './styles/home.styles';
import CreateUpdateTaskModal from './components/CreateUpdateTaskModal';
import {useModal} from './context/ModalContext';
import {useTasks} from '@src/hooks/useTask.hook';
import {selectTasks} from '@src/store/slices/task.reducer';
import {useAppSelector} from '@src/hooks/store.hook';
import SwipeableBox from './components/Swipeable/SwipeableBox';

export default function HomeScreen() {
  const {tasks: apiTasks} = useTasks();
  const {tasks: storeTasks} = useAppSelector(selectTasks);
  const {bottomSheetModalRef, editHandle} = useModal();

  const tasks = storeTasks || apiTasks;

  const handlePresentModalPress = () => {
    editHandle(false);
    bottomSheetModalRef.current?.present();
  };

  const sortedTasks = tasks
    ?.slice()
    .sort((a, b) => Number(b.completed) - Number(a.completed));

  return (
    <StatusLayout barStyle="dark-content">
      <View style={styles.containerPurpleBox}>
        <Text style={styles.textTitle}>Organize and Plan</Text>
        <Text style={styles.textTitle}>Your Whole Day</Text>
      </View>
      <View style={styles.containerFlashList}>
        <Text style={styles.textSubtitle}>Today you have to...</Text>

        <FlashList
          data={sortedTasks}
          renderItem={({item}) => <SwipeableBox item={item} />}
          estimatedItemSize={200}
          contentContainerStyle={styles.containerFlashListContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.containerButton}>
        <RoundButton iconName="plus" onPress={handlePresentModalPress} />
      </View>

      <CreateUpdateTaskModal />
    </StatusLayout>
  );
}
