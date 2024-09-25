import {Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import SwipeableBox from '@src/components/SwipeableComponent/SwipeableBox';
import StatusLayout from '@src/components/Layouts/StatusLayout';
import RoundButton from '@src/components/Buttons/RoundButton';
import {styles} from './styles/home.styles';
import CreateTaskModal from './components/CreateTaskModal';
import {useModal} from './context/ModalContext';
import {useTasks} from '@src/hooks/useTask.hook';

export default function HomeScreen() {
  const {tasks} = useTasks();
  const {bottomSheetModalRef} = useModal();

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <StatusLayout barStyle="dark-content">
      <View style={styles.containerPurpleBox}>
        <Text style={styles.textTitle}>Organize and Plan</Text>
        <Text style={styles.textTitle}>Your Whole Day</Text>
      </View>
      <View style={styles.containerFlashList}>
        <Text style={styles.textSubtitle}>Today you have to...</Text>

        <FlashList
          data={tasks}
          renderItem={({item}) => <SwipeableBox item={item} />}
          estimatedItemSize={200}
          contentContainerStyle={styles.containerFlashListContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.containerButton}>
        <RoundButton iconName="plus" onPress={handlePresentModalPress} />
      </View>

      <CreateTaskModal />
    </StatusLayout>
  );
}
