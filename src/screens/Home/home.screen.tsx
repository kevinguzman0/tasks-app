import {Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import StatusLayout from '@src/components/Layouts/StatusLayout';
import RoundButton from '@src/components/Buttons/RoundButton';
import {styles} from './styles/home.styles';
import CreateUpdateTaskModal from './components/CreateUpdateTaskModal';
import {useModal} from './context/ModalContext';
import SwipeableBox from './components/Swipeable/SwipeableBox';
import ListEmpty from './components/ListEmpty';
import SkeletonLoading from '@src/components/SkeletonLoading';
import {useSortedTasks} from '@src/hooks/useSortedTask';

const ListEmptyComponent = () => <ListEmpty />;

export default function HomeScreen() {
  const {sortedTasks, isGetTasksLoading} = useSortedTasks();
  const {bottomSheetModalRef, editHandle} = useModal();

  const handlePresentModalPress = () => {
    editHandle(false);
    bottomSheetModalRef.current?.present();
  };

  return (
    <StatusLayout barStyle="dark-content">
      <View style={styles.containerPurpleBox}>
        <Text style={styles.textTitle}>Organize and Plan</Text>
        <Text style={styles.textTitle}>Your Whole Day</Text>
      </View>

      <View style={styles.containerFlashList}>
        {isGetTasksLoading ? (
          <SkeletonLoading length={3} />
        ) : sortedTasks.length > 0 ? (
          <>
            <Text style={styles.textSubtitle}>Today you have to...</Text>
            <FlashList
              data={sortedTasks}
              renderItem={({item}) => <SwipeableBox item={item} />}
              estimatedItemSize={200}
              contentContainerStyle={styles.containerFlashListContent}
              showsVerticalScrollIndicator={false}
            />
          </>
        ) : (
          <ListEmptyComponent />
        )}
      </View>

      <View style={styles.containerButton}>
        <RoundButton iconName="plus" onPress={handlePresentModalPress} />
      </View>

      <CreateUpdateTaskModal />
    </StatusLayout>
  );
}
